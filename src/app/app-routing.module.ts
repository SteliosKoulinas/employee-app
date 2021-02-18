import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentListComponent } from './assignment/assignment-list/assignment-list.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { DeviceCreateComponent } from './assignment/devices/device-create/device-create.component';
import { EmployeeCreateComponent } from './assignment/employees/employee-create/employee-create.component';


const routes: Routes = [
  { path: 'employees', component: EmployeeCreateComponent },
  { path: 'devices', component: DeviceCreateComponent },
  { path: 'assignments', component: AssignmentListComponent},
  { path: 'home', component: AssignmentComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
