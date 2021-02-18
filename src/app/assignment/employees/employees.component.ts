import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee';
import { EmployeeManagmentService } from 'src/app/employee-managment.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  @Output() selectedemployee = new EventEmitter<Employee>();


  myemployees: Employee[] = [];

  constructor(private http: HttpClient, private employmanagment: EmployeeManagmentService) { }

  ngOnInit(): void {
    this.getallEmployees();
  }

  getallEmployees() {
    this.employmanagment.getemployees()
      .subscribe((employees: any) => {
        for (let key in employees) {
          this.myemployees.push(new Employee(key, employees[key].name, employees[key].email))
        }
      },
        error => {
          console.log(error);
        });
  }

  sendemployee(employee: Employee) {
    this.selectedemployee.emit(employee)
  }



}
