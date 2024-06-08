import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TimetableService } from '../services/timetable.service';
import { ClassService } from '../services/class.service';
import { ProfessorService } from '../services/professor.service';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface TimeSlot {
  day: string;
  startTime: string;
  endTime: string;
}

interface Timetable {
  id: number;
  classId: number;
  roomId: number;
  subjectId: number;
  professorId: number;
  subject: string;
  professor: string;
  timeSlots: TimeSlot[];
}

@Component({
  selector: 'app-timetable-view',
  templateUrl: './timetable-view.component.html',
  styleUrls: ['./timetable-view.component.css']
})
export class TimetableViewComponent implements OnInit {
  viewType: string = '';
  selectedClassId: number | null = null;
  selectedProfessorId: number | null = null;
  classes: any[] = [];
  professors: any[] = [];
  subjects: any[] = [];
  timetables: Timetable[] = [];
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  timeSlots: string[] = [
    '08:30 - 10:00',
    '10:10 - 11:40',
    '11:50 - 13:20',
    '13:30 - 14:20',
    '14:30 - 16:00',
    '16:10 - 17:40'
  ];

  constructor(
    private timetableService: TimetableService,
    private classService: ClassService,
    private professorService: ProfessorService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.fetchClasses();
    this.fetchProfessors();
    this.fetchSubjects();
  }

  fetchClasses(): void {
    this.classService.getAllClasses().subscribe(data => {
      this.classes = data;
      console.log('Classes:', this.classes);
    });
  }

  fetchProfessors(): void {
    this.professorService.getAllProfessors().subscribe(data => {
      this.professors = data;
      console.log('Professors:', this.professors);
    });
  }

  fetchSubjects(): void {
    this.subjectService.getAllSubjects().subscribe(data => {
      this.subjects = data;
      console.log('Subjects:', this.subjects);
    });
  }

  viewClassTimetable(): void {
    if (this.selectedClassId) {
      this.timetableService.getTimetablesByClass(this.selectedClassId).subscribe(data => {
        this.timetables = data;
        console.log('Timetables for class:', this.timetables);
        this.cdr.detectChanges(); 
      });
    }
  }

  viewProfessorTimetable(): void {
    if (this.selectedProfessorId) {
      this.timetableService.getTimetablesByProfessor(this.selectedProfessorId).subscribe(data => {
        this.timetables = data;
        console.log('Timetables for professor:', this.timetables);
        this.cdr.detectChanges();
      });
    }
  }

  isTimeSlotAvailable(day: string, timeSlot: string): boolean {
    const [startTime, endTime] = timeSlot.split(' - ').map(time => time.trim());
    return this.timetables.some(timetable =>
      timetable.timeSlots.some(slot =>
        slot.day === day && slot.startTime === startTime && slot.endTime === endTime
      )
    );
  }

  getTimetablesForTimeSlot(day: string, timeSlot: string): any[] {
    const [startTime, endTime] = timeSlot.split(' - ').map(time => time.trim());
    return this.timetables.filter(timetable =>
      timetable.timeSlots.some(slot =>
        slot.day === day && slot.startTime === startTime && slot.endTime === endTime
      )
    ).map(timetable => ({
      ...timetable,
      subject: this.getSubjectName(timetable.subjectId),
      professor: this.getProfessorName(timetable.professorId)
    }));
  }

  goBackToHome(): void {
    this.router.navigate(['/home']);
  }

  getProfessorName(professorId: number): string {
    const professor = this.professors.find(p => p.id === professorId);
    return professor ? professor.name : '';
  }

  getSubjectName(subjectId: number): string {
    const subject = this.subjects.find(s => s.id === subjectId);
    return subject ? subject.name : '';
  }
}
