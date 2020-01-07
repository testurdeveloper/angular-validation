import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class DeedService {

  constructor(private http: HttpClient, private router: Router) {}

  sendRequestForGetAlldeeds() {
    return this.http.get(`/api/deeds`);
  }

  sendRequestForGetAdeedsDetails(id) {
    return this.http.get(`/api/deeds/` + id);
  }

  sendRequestForAddANewdeed(deed) {
    return this.http.post(`/api/deeds`, deed);
  }

  sendRequestForUpdatedeed(deed) {
    return this.http.put(`/api/deeds`, deed);
  }

  sendRequestForDeletedeed(deed) {
    return this.http.delete(`/api/deeds/${deed.id}`);
  }


  getDeedlist() {
    return new Promise(resolve => {
      this.sendRequestForGetAlldeeds().subscribe(
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

  getDeedDetailsBuId(staff) {
    return new Promise(resolve => {
      this.sendRequestForGetAdeedsDetails(staff).subscribe(
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

  createNewDeed(deed) {
    return new Promise(resolve => {
      this.sendRequestForAddANewdeed(deed).subscribe(
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

  updateDeedDetails(deed) {
    return new Promise(resolve => {
      this.sendRequestForUpdatedeed(deed).subscribe(
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

  removeDeedMember(deed) {
    return new Promise(resolve => {
      this.sendRequestForDeletedeed(deed).subscribe(
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
