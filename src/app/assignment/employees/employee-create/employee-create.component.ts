import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { EmployeeManagmentService } from 'src/app/employee-managment.service';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  myemployees: Employee[] = [];
  employeecreate = false;
  toggle = false;
  
  myform = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email])
  });
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

  getemployee(id: any) {
    this.employmanagment.getemployee(id)
      .subscribe(
        (employee: any) => {
          alert("name: " + employee.name + " - email: " + employee.email)
        }
      )

  }

  createemployee() {
    let flag: Boolean = false;
    for (let i = 0; i < this.myemployees.length; i++) {

      if (this.myemployees[i].name == this.myform.value.name || this.myemployees[i].email == this.myform.value.email) {
        flag = true;
        break;
      }

    }
    if (flag == false) {
      this.employmanagment.create(this.myform.value).subscribe(
        (data: any) => {
          this.myemployees.push(new Employee(data.name, this.myform.value.name, this.myform.value.email))
        }
      )
    }
    else {
      alert("Employee Name or Email Address Already Exists!")
    }

  }

  deleteemployee(id: any) {
    this.employmanagment.delete(id)
      .subscribe(
        () => {
          this.myemployees.splice(this.myemployees.findIndex(function (employee) {
            return employee.id === id;
          }), 1)


        }
      )

  }

  editemployee(id: any) {
    let flag: Boolean = false;
    for (let i = 0; i < this.myemployees.length; i++) {

      if (this.myemployees[i].name == this.myform.value.name || this.myemployees[i].email == this.myform.value.email) {
        flag = true;
        break;
      }

    }
    if (flag == false) {

      this.employmanagment.update(id, this.myform.value)
        .subscribe(
          (response: any) => {
            for (let i = 0; i < this.myemployees.length; i++) {
              if (this.myemployees[i].id == id) {
                this.myemployees[i].name = response.name
                this.myemployees[i].email = response.email

              }
            }
            this.toggle = !this.toggle;
          }
        )
    }
    else {
      alert("Employee Name or Email Address Already Exists!")
    }
  }


}
