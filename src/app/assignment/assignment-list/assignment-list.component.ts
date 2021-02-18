import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AssignManagmentService } from 'src/app/assign-managment.service';
import { Connection } from 'src/app/connection';
import { DeviceManagmentService } from 'src/app/device-managment.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  myconnections: Connection[] = [];
  constructor(private http: HttpClient, private assignmanagment: AssignManagmentService,private devicemanagment: DeviceManagmentService) { }

  ngOnInit(): void {
    this.getallconnections();
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

  deleteconnection(id: string, sn: string) {
    this.assignmanagment.delete(id)
      .subscribe(
        () => {
          this.myconnections.splice(this.myconnections.findIndex(function (connection) {
            return connection.id === id;
          }), 1)
          this.devicemanagment.updateproperty(sn, { "available": true }).subscribe();

        }
      )

  }

}
