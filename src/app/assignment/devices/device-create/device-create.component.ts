import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceManagmentService } from 'src/app/device-managment.service';
import { Device } from 'src/app/device';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {
  mydevices: Device[] = [];
  add=false;
  edit=false;

  myform = new FormGroup({
    description: new FormControl("",Validators.required),
    type: new FormControl("",Validators.required),
    available: new FormControl()
  });

  myformedit = new FormGroup({
    description: new FormControl("",Validators.required),
    type: new FormControl("",Validators.required),
    available: new FormControl()
  });

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

  getdevice(sn: any):any {
    this.devicemanagment.getdevice(sn)
      .subscribe(
        (device: any) => {
          alert("Description: "+device.description+" - Type: "+device.type+" - Available: "+device.available)
        }
      )
  }

  createdevice() {
    this.myform.value.available = true;
    this.devicemanagment.create(this.myform.value).subscribe(
      (data: any) => {
        this.mydevices.push(new Device(data.name, this.myform.value.description, this.myform.value.type, this.myform.value.available))
        console.log(this.myform.value.available)
      }
    )
  }

  deletedevice(sn: any) {
    this.devicemanagment.delete(sn)
      .subscribe(
        () => {
          this.mydevices.splice(this.mydevices.findIndex(function (device) {
            return device.sn === sn;
          }), 1)


        }
      )

  }

  editdevice(sn: string,available:boolean) {
    this.myformedit.value.available = available;
    this.devicemanagment.update(sn, this.myformedit.value)
      .subscribe(
        (response: any) => {
          for (let i = 0; i < this.mydevices.length; i++) {
            if (this.mydevices[i].sn == sn) {
              this.mydevices[i].description = response.description
              this.mydevices[i].type = response.type
            }
          }
        }
      )
  }


}
