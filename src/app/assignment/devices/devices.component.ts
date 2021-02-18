import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceManagmentService } from 'src/app/device-managment.service';
import { Device } from 'src/app/device';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  @Output() selecteddevice = new EventEmitter<Device>();
  mydevices: Device[] = [];
  


  constructor(private http: HttpClient, private devicemanagment: DeviceManagmentService) { }

  ngOnInit(): void {
    this.getallDevices();

  }

  getallDevices() {
    this.devicemanagment.getdevices()
      .subscribe((devices: any) => {
        for (let key in devices) {
          this.mydevices.push(new Device(key, devices[key].description, devices[key].type, devices[key].available))
        }
      },
        error => {
          console.log(error);
        });
  }

  senddevice(device: Device) {
    this.selecteddevice.emit(device)
  }

}
