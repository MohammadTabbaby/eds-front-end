import { Component } from '@angular/core';
import { SubjectService } from '../services/subject.service';
import { SubjectEntity } from '../models/subject.entity';
import {Router} from "@angular/router"
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  subjectEntity: SubjectEntity = new SubjectEntity();

  constructor(private subjectService: SubjectService, private router: Router) {}

  saveSubject(): void {
    this.subjectService.saveSubject(this.subjectEntity).subscribe(() => {
      this.router.navigate(['/home'])
    });
  }
}
