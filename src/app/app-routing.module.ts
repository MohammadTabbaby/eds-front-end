// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { TimetableCreateComponent } from './timetable-create/timetable-create.component';
import { TimetableViewComponent } from './timetable-view/timetable-view.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-class', component: AddClassComponent, canActivate: [AuthGuard] },
  { path: 'add-room', component: AddRoomComponent, canActivate: [AuthGuard] },
  { path: 'add-subject', component: AddSubjectComponent, canActivate: [AuthGuard] },
  { path: 'add-professor', component: AddProfessorComponent, canActivate: [AuthGuard] },
  { path: 'timetable-create', component: TimetableCreateComponent, canActivate: [AuthGuard] },
  { path: 'view-timetable', component: TimetableViewComponent ,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
