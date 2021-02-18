import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { Device } from '../device';
import { Connection } from '../connection';
import { AssignManagmentService } from 'src/app/assign-managment.service';
import { Connect } from '../connect';
import { DeviceManagmentService } from '../device-managment.service';



@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  employee = new Employee('', '', '')
  device = new Device('', '', 0, true);
  connection = new Connection('', '', '');
  connect = new Connect('', '');
  myconnections: Connection[] = [];
  selecteddevices: string[] = [];
  flag: boolean = false;
  flagdevices: boolean = false;
  flagdeviceinfo: boolean = false;


  constructor(private http: HttpClient, private assignmanagment: AssignManagmentService, private devicemanagment: DeviceManagmentService) { }

  ngOnInit(): void {
    this.getallconnections();
  }

  getselectedemployee(employee: Employee) {
    this.employee = employee;
    this.flag = true;
  }

  getselecteddevice(device: Device) {
    this.device = device;
  }

  getdevices(id: string) {
    this.selecteddevices.length = 0;
    for (let key in this.myconnections) {
      if (this.myconnections[key].eid == id) {
        this.selecteddevices.push(this.myconnections[key].dsn)
      }
    }
    this.flagdevices = true;

  }

  deviceinfo(sn: string) {
    this.devicemanagment.getdevice(sn).subscribe((data: any) => {
      this.device = data;
      this.flagdeviceinfo = true;
    });
  }

  createconnection() {
    let flag: Boolean = false;
    for (let i = 0; i < this.myconnections.length; i++) {

      if (this.myconnections[i].dsn == this.device.sn) {
        flag = true;
        break;
      }

    }
    if (flag == false && this.employee.id !== "" && this.employee.id !== undefined && this.employee.id !== null) {
      this.connect = new Connect(this.employee.id, this.device.sn);
      this.assignmanagment.create(this.connect).subscribe(
        (data: any) => {
          this.myconnections.push(new Connection(data.name, this.employee.id, this.device.sn))
          this.device.available = false;
          this.devicemanagment.updateproperty(this.device.sn, { "available": false }).subscribe();
        }
      )
    }
  }

  getallconnections() {
    this.assignmanagment.getconnections()
      .subscribe((connections: any) => {
        for (let key in connections) {
          this.myconnections.push(new Connection(key, connections[key].eid, connections[key].dsn))
        }

      },
        error => {
          console.log(error);
        });
  }

  delconnection(sn: string) {
    for (let i = 0; i < this.myconnections.length; i++) {
      if (this.myconnections[i].dsn == sn) {
        this.assignmanagment.delete(this.myconnections[i].id)
          .subscribe(
            () => {
              this.myconnections.splice(i, 1)
              this.device.available = true;
              this.devicemanagment.updateproperty(sn, { "available": true }).subscribe();
              this.selecteddevices.splice(this.selecteddevices.findIndex(function (device) {
                return device === sn;
              }), 1)

            }
          )
        break;
      }

    }



  }



}
