import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StudentsComponent } from '../students/students.component';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { AddStudentComponent } from '../add-student/add-student.component';

export const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"students", component:StudentsComponent},
  {path:"studentDetails/:id", component:StudentDetailsComponent},
  {path:"addStudent", component:AddStudentComponent},
];


// {path:"", redirectTo:"home", pathMatch:"full"}
