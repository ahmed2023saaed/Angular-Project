import { Injectable } from '@angular/core';
import { Students } from './students';
import { StudentDetails } from './student-details';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServeStudentService {
  students: Students[] = [];
  studentDetails: StudentDetails[] = [];


    private studentDetailObserve = new BehaviorSubject<StudentDetails[]>([])

    $studentDetails = this.studentDetailObserve.asObservable()

  private studentBehavior = new BehaviorSubject<Students[]>([])
   $students  = this.studentBehavior.asObservable()

  constructor() {

  const initialStudents:Students[] =[
  { id: 3255, name: 'Ahmed', age: 32, department: 'MIS', gpa: 3.3 },
  { id: 3452, name: 'Hany', age: 24, department: 'BIS', gpa: 2.3 },
  { id: 3256, name: 'Mark', age: 25, department: 'Computer Science', gpa: 3.5 },
  { id: 3257, name: 'Kholoud', age: 22, department: 'Finance', gpa: 3.4 },
  { id: 3258, name: 'Kareem', age: 33, department: 'Marketing', gpa: 2.9 },
  { id: 3259, name: 'Kamel', age: 35, department: 'Accounting', gpa: 1.9 },
  { id: 3260, name: 'Mary', age: 24, department: 'Management', gpa: 3.9 },
  { id: 3261, name: 'Hady', age: 31, department: 'Electronics', gpa: 3.1 },
];

  const initialData:StudentDetails[] =[
      {
        id: 3255,
        firstName: 'Ahmed',
        lastName: 'Hassan',
        gender: 'Male',
        email: 'ahmed.hassan@gmail.com',
        phone: '01012345678',
        address: '12 Nile Street',
        city: 'Cairo',
        country: 'Egypt',
        level: 3,
        enrollmentDate: '2022-09-15',
        isActive: true,
        age: 32,
        department: 'MIS',
        gpa: 3.3,
      },
      {
        id: 3452,
        firstName: 'Hany',
        lastName: 'Ali',
        gender: 'Male',
        email: 'hany.ali@yahoo.com',
        phone: '01123456789',
        address: '45 Tahrir Square',
        city: 'Giza',
        country: 'Egypt',
        level: 2,
        enrollmentDate: '2023-02-10',
        isActive: true,
        age: 24,
        department: 'BIS',
        gpa: 2.3,
      },
      {
        id: 3256,
        firstName: 'Mark',
        lastName: 'George',
        gender: 'Male',
        email: 'mark.george@gmail.com',
        phone: '01234567890',
        address: '8 Ramses Street',
        city: 'Alexandria',
        country: 'Egypt',
        level: 4,
        enrollmentDate: '2021-10-05',
        isActive: true,
        age: 25,
        department: 'Computer Science',
        gpa: 3.5,
      },
      {
        id: 3257,
        firstName: 'Kholoud',
        lastName: 'Mahmoud',
        gender: 'Female',
        email: 'kholoud.m@gmail.com',
        phone: '01098765432',
        address: '22 Nasr City',
        city: 'Cairo',
        country: 'Egypt',
        level: 1,
        enrollmentDate: '2024-01-20',
        isActive: true,
        age: 22,
        department: 'Finance',
        gpa: 3.4,
      },
      {
        id: 3258,
        firstName: 'Kareem',
        lastName: 'Said',
        gender: 'Male',
        email: 'kareem.said@gmail.com',
        phone: '01187654321',
        address: '5 October Street',
        city: '6th October',
        country: 'Egypt',
        level: 3,
        enrollmentDate: '2022-03-12',
        isActive: false,
        age: 33,
        department: 'Marketing',
        gpa: 2.9,
      },
      {
        id: 3259,
        firstName: 'Kamel',
        lastName: 'Ibrahim',
        gender: 'Male',
        email: 'kamel.ibrahim@yahoo.com',
        phone: '01211112222',
        address: '77 Haram Street',
        city: 'Giza',
        country: 'Egypt',
        level: 4,
        enrollmentDate: '2020-11-30',
        isActive: false,
        age: 35,
        department: 'Accounting',
        gpa: 1.9,
      },
      {
        id: 3260,
        firstName: 'Mary',
        lastName: 'Nabil',
        gender: 'Female',
        email: 'mary.nabil@gmail.com',
        phone: '01033334444',
        address: '14 Smouha',
        city: 'Alexandria',
        country: 'Egypt',
        level: 2,
        enrollmentDate: '2023-06-18',
        isActive: true,
        age: 24,
        department: 'Management',
        gpa: 3.9,
      },
      {
        id: 3261,
        firstName: 'Hady',
        lastName: 'Fathy',
        gender: 'Male',
        email: 'hady.fathy@gmail.com',
        phone: '01155556666',
        address: '9 Maadi Street',
        city: 'Cairo',
        country: 'Egypt',
        level: 3,
        enrollmentDate: '2022-08-25',
        isActive: true,
        age: 31,
        department: 'Electronics',
        gpa: 3.1,
      },
    ];

    this.studentDetailObserve.next(initialData);

    this.studentBehavior.next(initialStudents)
  }

  addStudents(newStudent:Students){
    const currentStudents = this.studentBehavior.getValue()
    const updatedData = [...currentStudents, newStudent];
    this.studentBehavior.next(updatedData)
  }


  addStudentDetails(newStudent:StudentDetails){
    const currentStudentDetail = this.studentDetailObserve.getValue()
    const updatedArray = [...currentStudentDetail, newStudent]
    this.studentDetailObserve.next(updatedArray);
  }

  getStudentData(): Students[] {
    return this.students;
  }

  getStudentDetails(): StudentDetails[] {
    return this.studentDetails;
  }

  // updateStudents(id:number):Students[]{
  //   return this.students = this.students.filter(s => s.id !== id )
  // }

deleteStudent(id: number): void {
  const current = this.studentBehavior.getValue();
  this.studentBehavior.next(current.filter(s => s.id !== id));
}

  getElementById(id:number):StudentDetails | null {
    const current = this.studentDetailObserve.getValue()
    const student = current.find((student)=> student.id === id);
    return student? student : null
  }

}
