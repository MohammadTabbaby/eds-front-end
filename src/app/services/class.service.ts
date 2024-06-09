import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassEntity } from '../models/class.entity';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl = 'http://localhost:32247/api/classes';

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  saveClass(classEntity: ClassEntity): Observable<ClassEntity> {
    return this.http.post<ClassEntity>(this.apiUrl, classEntity);
  }
}