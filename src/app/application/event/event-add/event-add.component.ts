import { Component, OnInit } from '@angular/core';
import { Events } from '../../../_models/events';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../../_models/clients';
import { Router } from '@angular/router';
import { Staff } from '../../../_models/staff';
import { CaseService } from '../../../_services/case.service';
import { ClientService } from '../../../_services/client.service';
import { StaffService } from '../../../_services/staff.service';
import { EventService } from '../../../_services/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  newevent: Events = {};
  people$: Observable<Client[]>;
  staff$: Observable<Staff[]>;

  constructor(private router: Router,
    private caseServices: CaseService,
    private clientService: ClientService,
    private staffService: StaffService,
    private eventService: EventService) { }

  ngOnInit() {
    this.getAllstaff();
    this.newevent.priority = "Low";
    this.newevent.date = new Date();

  }

  async getAllstaff() {
    console.log("get client request");
    const responce: any = await this.staffService.getStafflist();
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      element.name = element.firstname + " " + element.lastname;
    }
    this.staff$ = responce;
    console.log(responce);
  }

  async addNewEvent() {
    if (!this.newevent.eventname || !this.newevent.date || !this.newevent.starttime || !this.newevent.description || !this.newevent.priority || !this.newevent.staff) {
      alertify.set('notifier', 'position', 'top-right');
      alertify.error('Required field/s missing..');
    } else {

      console.log(this.newevent)
      this.newevent.endtime = this.newevent.starttime;
      const staffData: any = this.staff$;
      const assignedtsss = staffData.find(({ id }) => id === this.newevent.staff);
      this.newevent.staff = assignedtsss;

      const newEvent: any = await this.eventService.createNewEvent(this.newevent);
      if (newEvent.success) {
        this.reset();
      }else{
        this.newevent.staff = assignedtsss.id;
      }
    }

  }

  reset() {
    this.newevent = {};
    this.newevent.priority = "Low";
    this.newevent.date = new Date();
  }

}
