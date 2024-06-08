import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectEntity } from '../models/subject.entity';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl = 'http://localhost:9002/api/subjects';

  constructor(private http: HttpClient) { }

  getAllSubjects(): Observable<SubjectEntity[]> {
    return this.http.get<SubjectEntity[]>(`${this.apiUrl}`);
  }

  saveSubject(subjectEntity: SubjectEntity): Observable<SubjectEntity> {
    return this.http.post<SubjectEntity>(this.apiUrl, subjectEntity);
  }

  getSubjectNameById(subjectId: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/${subjectId}/name`);
  }
}
