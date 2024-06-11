import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private baseUrl = 'http://localhost:9002/api/timetables';

  constructor(private http: HttpClient) {}

  createTimetable(timetable: any): Observable<any> {
    return this.http.post(this.baseUrl, timetable);
  }

  getTimetablesByClass(classId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/class/${classId}`);
  }

  getTimetablesByProfessor(professorId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/professor/${professorId}`);
  }
}
