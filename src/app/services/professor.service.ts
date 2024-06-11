import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessorEntity } from '../models/professor.entity';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'http://localhost:9002/api/professors';

  constructor(private http: HttpClient) { }

  getAllProfessors(): Observable<ProfessorEntity[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  saveProfessor(professorEntity: ProfessorEntity): Observable<ProfessorEntity> {
    return this.http.post<ProfessorEntity>(this.apiUrl, professorEntity);
  }
}