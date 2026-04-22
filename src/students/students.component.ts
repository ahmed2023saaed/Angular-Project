import { Component, OnInit } from '@angular/core';
import { Students } from '../app/students';
import { ServeStudentService } from '../app/serve-student.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {Observable} from "rxjs"
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit{

  students:Students[] = [];
  searchedName :string = "";

  selectedStudentId:number | string=0;
  students$ : Observable<Students[]>

  constructor(private _studentService : ServeStudentService, private router: Router){
    this.students$ = this._studentService.$students
  }

  ngOnInit(): void {
      this.students = this._studentService.getStudentData()
  }

  deleteStudent(id:number){
    // this.students =  this._studentService.updateStudents(id)
    const current = this._studentService['studentBehavior'].getValue();

    const updated = current.filter(s => s.id !== id);
    this._studentService['studentBehavior'].next(updated);
  }

  navigateToDetails(id:number){
    console.log("Navigating with ID:", id);
    this.router.navigateByUrl(`/studentDetails/${id}`)
  }

  searchName(name:string){
this.searchedName = name.trim();
  console.log(this.searchedName)
  }

}
