import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignManagmentService {

  constructor(private http: HttpClient) { }

  getconnections() {
    return this.http.get('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/connect.json')
  }

  getconnection(id: any) {
    return this.http.get('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/connect/' + id + '.json')
  }

  create(data: any) {
    return this.http.post('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/connect.json', data);
  }

  update(id: string, data: any) {
    return this.http.put('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/connect/' + id + '.json', data);
  }

  updateproperty(id: string, data: any) {
    return this.http.patch('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/connect/' + id + '.json', data);
  }

  delete(id: string) {
    return this.http.delete('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/connect/' + id + '.json');
  }

}