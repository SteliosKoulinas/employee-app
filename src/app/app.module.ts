import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EmployeesComponent } from './assignment/employees/employees.component';
import { DevicesComponent } from './assignment/devices/devices.component';
import { EmployeeCreateComponent } from './assignment/employees/employee-create/employee-create.component';
import { DeviceCreateComponent } from './assignment/devices/device-create/device-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    EmployeesComponent,
    DevicesComponent,
    EmployeeCreateComponent,
    DeviceCreateComponent,
    NavbarComponent,
    AssignmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
