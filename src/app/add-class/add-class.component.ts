import { Component } from '@angular/core';
import { ClassService } from '../services/class.service';
import { ClassEntity } from '../models/class.entity';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent {
  classEntity: ClassEntity = new ClassEntity();

  constructor(private classService: ClassService, private router: Router) {}

  saveClass(): void {
    this.classService.saveClass(this.classEntity).subscribe(() => {
      // Handle post-save actions
      this.router.navigate(['/home'])
    });
  }
}