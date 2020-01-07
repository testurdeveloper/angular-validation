import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class EventService {

  constructor(private http: HttpClient, private router: Router) {}

  sendRequestForGetAllevents() {
    return this.http.get(`/api/events`);
  }

  sendRequestForGetAeventsDetails(id) {
    return this.http.get(`/api/events/` + id);
  }

  sendRequestForAddANewevent(event) {
    return this.http.post(`/api/events`, event);
  }

  sendRequestForUpdateevent(event) {
    return this.http.put(`/api/events`, event);
  }

  sendRequestForDeleteevent(event) {
    return this.http.delete(`/api/events/${event.id}`);
  }


  getEventlist() {
    return new Promise(resolve => {
      this.sendRequestForGetAllevents().subscribe(
        data => {
          const tempData: any = data || {};
          resolve(tempData);
        },
        error => {
          console.log("Error", error);
          resolve([]);
        }
      );
    });
  }

  getEventDetailsBuId(event) {
    return new Promise(resolve => {
      this.sendRequestForGetAeventsDetails(event).subscribe(
        data => {
          const tempData: any = data || {};
          resolve(data);
        },
        error => {
          console.log("Error", error);
          resolve({});
        }
      );
    });
  }

  createNewEvent(event) {
    return new Promise(resolve => {
      this.sendRequestForAddANewevent(event).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
          resolve(data);
        },
        error => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.error(error.error.message);
          resolve(error);
        }
      );
    });
  }

  updateEventDetails(event) {
    return new Promise(resolve => {
      this.sendRequestForUpdateevent(event).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
          resolve(data);
        },
        error => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.error(error.error.message);
          resolve(error);
        }
      );
    });
  }

  removeEventMember(event) {
    return new Promise(resolve => {
      this.sendRequestForDeleteevent(event).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
          resolve(data);
        },
        error => {
          alertify.set('notifier', 'position', 'top-right');
          alertify.error(error.error.message);
          resolve(error);
        }
      );
    });
  }

}
