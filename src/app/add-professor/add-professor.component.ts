import { Component } from '@angular/core';
import { ProfessorService } from '../services/professor.service';
import { ProfessorEntity } from '../models/professor.entity';
import {Router} from "@angular/router"
@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent {
  professorEntity: ProfessorEntity = new ProfessorEntity();

  constructor(private professorService: ProfessorService, private router: Router) {}

  saveProfessor(): void {
    this.professorService.saveProfessor(this.professorEntity).subscribe(() => {
      // Handle post-save actions
      this.router.navigate(['/home'])
    });
  }
}