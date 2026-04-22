import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms"
import { FormGroup,FormControl } from '@angular/forms';
import { ServeStudentService } from '../app/serve-student.service';
import { StudentDetails } from '../app/student-details';
import { Students } from '../app/students';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent{
  public students$ : Observable<Students[]>

  myForm = new FormGroup({
    id:new FormControl(0),
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    age:new FormControl(0),
    gender:new FormControl(""),
    email:new FormControl(""),
    phone:new FormControl(""),
    address:new FormControl(""),
    city:new FormControl(""),
    country:new FormControl(""),
    department:new FormControl(""),
    level:new FormControl(0),
    gpa:new FormControl(0),
    enrollmentDate:new FormControl(""),
    isActive:new FormControl(false)
  })

  studentForm = new FormGroup({
    id:new FormControl(0),
    firstName: new FormControl("")
    ,
    age:new FormControl(0),
    department:new FormControl(""),
    gpa:new FormControl(0),
  })



constructor(private _ServeStudentService:ServeStudentService){

    this.students$ = this._ServeStudentService.$students
  }


  onSubmit(){
   if(this.myForm.valid){


     const val = this.myForm.value

     const newId = Number(val.id) || Date.now();

    const studentData:Students = {
      id: newId ,
      name:val.firstName+ " "+val.lastName,
      age: Number(val.age),
      department: val.department || "",
      gpa: Number(val.gpa)
    }
    this._ServeStudentService.addStudents(studentData)


        const newStudentDetails: StudentDetails = {
      ...this.myForm.value as StudentDetails,
      id: newId,         // ✅ ensure id is a number, same as Students
      age: Number(val.age),
      gpa: Number(val.gpa),
      level: Number(val.level),
    };
    // const newStudent  = this.myForm.value  as StudentDetails;
    this._ServeStudentService.addStudentDetails(newStudentDetails)
    this.myForm.reset()
   }

  }




}
