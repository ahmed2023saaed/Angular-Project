import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsComponent } from '../students/students.component';
import { ServeStudentService } from '../app/serve-student.service';
import { StudentDetails } from '../app/student-details';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  id:number = 0;

  studentData$! : Observable<StudentDetails | null>

  studentData:StudentDetails | null = null;

  constructor(private activatedRoute:ActivatedRoute, private _ServeStudentService :ServeStudentService ){
    // this.studentData$  = this._ServeStudentService.$studentDetails
  }


  ngOnInit(): void {
    this.id  = Number(this.activatedRoute.snapshot.paramMap.get("id")) ;
    console.log(this.id)
    this.studentData$ = this._ServeStudentService.$studentDetails.pipe(map(s => s.find(s => s.id === this.id)?? null))
  }


}
