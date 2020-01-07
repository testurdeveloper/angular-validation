import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Router } from '@angular/router';
import { CaseService } from '../../../_services/case.service';
import { ClientService } from '../../../_services/client.service';
import { StaffService } from '../../../_services/staff.service';
import { EventService } from '../../../_services/event.service';
declare var $: any;

@Component({
  selector: 'app-event-calender',
  templateUrl: './event-calender.component.html',
  styleUrls: ['./event-calender.component.css']
})
export class EventCalenderComponent implements OnInit {



  events: any = [];

  constructor(private router: Router,
    private caseServices: CaseService,
    private clientService: ClientService,
    private staffService: StaffService,
    private eventService: EventService) { }

  calendarOptions: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  popupEvent:any = {};
  ngOnInit() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: [],
    };

    this.getAllevents();
  }

  async getAllevents() {
    const responce: any = await this.eventService.getEventlist();
    const tempData = [];
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      var date = new Date(element.date);

      // date.setHours();

      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();
      let s = element.starttime;
      console.log(s)
      let parts = s.match(/(\d+)\:(\d+)/);
      console.log(parts)
      let hours = parseInt(parts[1], 10);
      let minutes = parseInt(parts[2], 10);

      date.setHours(hours);
      date.setMinutes(minutes);
      console.log(date)
      let color = "darkgray"
      if (element.priority == "Low") {
        color = "palegreen"
      } else if (element.priority == "Medium") {
        color = "lightpink"
      } else {
        color = "#DC3547"
      }
      const temp = {
        title: element.eventname,
        start: new Date(y, m, d, date.getHours(), 0),
        backgroundColor: color,
        description: element.description,
        staff: element.staff.id,
        staffname:element.staff.firstname + " " + element.staff.lastname,
        eventdate:element.date,
        eventtime:element.starttime,
        priority:element.priority,
        recordid:element.id
     
      }
      tempData.push(temp)
    }
    this.events = tempData;
  }

  eventClick(model) {
    const data = model.event
    console.log(data);
    this.popupEvent = data;
    $('#exampleModal').modal('show')
  }

  async removeEvent(){
    if(this.popupEvent && this.popupEvent.recordid){
      const temp = this.popupEvent;
      temp.id = temp.recordid;
      const dele:any = await this.eventService.removeEventMember(temp)
      if (dele.success) {
        $('#exampleModal').modal('hide');
        this.getAllevents();
      }
    }else{
      alertify.set('notifier', 'position', 'top-right');
      alertify.error('Select event failed,Please try again');
      $('#exampleModal').modal('hide')
    }
  }

}
