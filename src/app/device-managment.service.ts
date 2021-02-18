import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviceManagmentService {

  constructor(private http: HttpClient) {
  }

  getdevices() {
    return this.http.get('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/device.json')
  }

  getdevice(id: any) {
    return this.http.get('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/device/' + id + '.json')
  }

  create(data: any) {
    return this.http.post('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/device.json', data);
  }

  update(id: string, data: any) {
    return this.http.put('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/device/' + id + '.json', data);
  }

  updateproperty(id: string, data: any) {
    return this.http.patch('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/device/' + id + '.json', data);
  }

  delete(id: any) {
    return this.http.delete('https://capstone-project-2153e-default-rtdb.firebaseio.com/system/device/' + id + '.json');
  }
}
