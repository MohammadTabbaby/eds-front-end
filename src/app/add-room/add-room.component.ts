import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';
import { RoomEntity } from '../models/room.entity';
import {Router} from "@angular/router"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {
  roomEntity: RoomEntity = new RoomEntity();

  constructor(private roomService: RoomService, private router: Router, private snackBar: MatSnackBar) {}

  saveRoom(): void {
    this.roomService.saveRoom(this.roomEntity).subscribe(() => {
      this.snackBar.open('Room added successfully', 'Close', {
        duration: 2000,
      });
      // Handle post-save actions
      this.router.navigate(['/home'])
    });
  }
}