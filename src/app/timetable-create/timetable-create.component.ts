import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableService } from '../services/timetable.service';
import { ClassService } from '../services/class.service';
import { RoomService } from '../services/room.service';
import { SubjectService } from '../services/subject.service';
import { ProfessorService } from '../services/professor.service';

@Component({
  selector: 'app-timetable-create',
  templateUrl: './timetable-create.component.html',
  styleUrls: ['./timetable-create.component.css']
})
export class TimetableCreateComponent implements OnInit {
  timetable: any = {
    classId: null,
    roomId: null,
    subjectId: null,
    professorId: null,
    timeSlots: []
  };

  classes: any[] = [];
  rooms: any[] = [];
  subjects: any[] = [];
  professors: any[] = [];
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  timeRanges: string[] = ['08:30-10:00', '10:00-11:30', '11:30-13:00', '14:00-15:30', '15:30-17:00', '17:00-18:30'];

  constructor(
    private timetableService: TimetableService,
    private classService: ClassService,
    private roomService: RoomService,
    private subjectService: SubjectService,
    private professorService: ProfessorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchClasses();
    this.fetchRooms();
    this.fetchSubjects();
    this.fetchProfessors();
    
  }

  fetchClasses(): void {
    this.classService.getAllClasses().subscribe(data => {
      this.classes = data;
    });
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  fetchSubjects(): void {
    this.subjectService.getAllSubjects().subscribe(data => {
      this.subjects = data;
    });
  }

  fetchProfessors(): void {
    this.professorService.getAllProfessors().subscribe(data => {
      this.professors = data;
    });
  }

  onTimeSlotChange(day: string, time: string, event: any): void {
    const timeSlot = { day, startTime: time.split('-')[0], endTime: time.split('-')[1] };
    if (event.target.checked) {
      this.timetable.timeSlots.push(timeSlot);
    } else {
      this.timetable.timeSlots = this.timetable.timeSlots.filter((slot: any) => 
        !(slot.day === day && slot.startTime === timeSlot.startTime && slot.endTime === timeSlot.endTime));
    }
  }

  saveTimetable(): void {
    console.log('Formatted Timetable data:', this.timetable);
    this.timetableService.createTimetable(this.timetable).subscribe(
      response => {
        console.log('Timetable created successfully', response);
        alert('Timetable created successfully');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error creating timetable:', error);
      }
    );
  }
}
