export class TimetableEntity {
  id?: number;
  classId!: number;
  roomId!: number;
  subjectId!: number;
  professorId!: number;
  selectedDays: string[] = [];
  selectedTimeSlots: string[] = [];
}
