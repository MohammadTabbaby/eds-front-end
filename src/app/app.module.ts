import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { TimetableCreateComponent } from './timetable-create/timetable-create.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TimetableViewComponent } from './timetable-view/timetable-view.component';
import { AppRoutingModule } from './app-routing.module';
import { TimetableService } from './services/timetable.service';
import { ClassService } from './services/class.service';
import { RoomService } from './services/room.service';
import { SubjectService } from './services/subject.service';
import { ProfessorService } from './services/professor.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-class', component: AddClassComponent, canActivate: [AuthGuard] },
  { path: 'add-room', component: AddRoomComponent, canActivate: [AuthGuard] },
  { path: 'add-subject', component: AddSubjectComponent, canActivate: [AuthGuard] },
  { path: 'add-professor', component: AddProfessorComponent, canActivate: [AuthGuard] },
  { path: 'timetable-create', component: TimetableCreateComponent, canActivate: [AuthGuard] },
  { path: 'timetable-view', component: TimetableViewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddClassComponent,
    AddRoomComponent,
    AddSubjectComponent,
    AddProfessorComponent,
    TimetableCreateComponent,
    TimetableViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatOption,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
