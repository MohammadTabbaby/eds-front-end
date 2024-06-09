import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomEntity } from '../models/room.entity';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:32247/api/rooms';

  constructor(private http: HttpClient) { }

  getAllRooms(): Observable<RoomEntity[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  saveRoom(roomEntity: RoomEntity): Observable<RoomEntity> {
    return this.http.post<RoomEntity>(this.apiUrl, roomEntity);
  }
}