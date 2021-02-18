import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class EmployeeManagmentService {
 

  constructor(private http: HttpClient) {
  }

  getemployees() {
    return this.http.get('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/employee.json')
  }

  getemployee(id: any) {
    return this.http.get('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/employee/' + id + '.json')
  }

  create(data: any) {
    return this.http.post('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/employee.json', data);
  }

  update(id: any, data: any) {
    return this.http.put('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/employee/' + id + '.json', data);
  }

  delete(id: any) {
    return this.http.delete('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/employee/' + id + '.json');
  }
}
