import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class CaseService {

  constructor(private http: HttpClient, private router: Router) {}

  sendRequestForGetAllCases() {
    return this.http.get(`/api/cases`);
  }

  sendRequestForGetACasesDetails(id) {
    return this.http.get(`/api/cases/` + id);
  }

  sendRequestForAddANewCases(cases) {
    return this.http.post(`/api/cases`, cases);
  }

  sendRequestForUpdateCases(cases) {
    return this.http.put(`/api/cases`, cases);
  }

  sendRequestForDeleteCases(cases) {
    return this.http.delete(`/api/cases/${cases.id}`);
  }

  sendRequestForAddPayment(cases) {
    return this.http.post(`/api/case-addpayment`, cases);
  }

  
  sendRequestForAddCaseProcess(cases) {
    return this.http.post(`/api/case-addcaseprocess`, cases);
  }
  
  getAllCases() {
    return new Promise(resolve => {
      this.sendRequestForGetAllCases().subscribe(
        data => {
          const tempData: any = data || {};
          resolve(tempData);

        },
        error => {
          resolve(error._body);         
        }
      );
    });
  }

  getACaseDetails(id) {
    return new Promise(resolve => {
      this.sendRequestForGetACasesDetails(id).subscribe(
        data => {
          const tempData: any = data || {};
          resolve(tempData);
        },
        error => {
          resolve({});
        }
      );
    });
  }

  addCase(cases) {
    return new Promise(resolve => {
      this.sendRequestForAddANewCases(cases).subscribe(
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

  updateCase(cases) {
    return new Promise(resolve => {
      this.sendRequestForUpdateCases(cases).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
         resolve(tempData);
       },
       error => {
         alertify.set('notifier', 'position', 'top-right');
         alertify.error(error.error.message);
         resolve([]);
       }
      );
    });
  }

  removeCase(cases) {
    return new Promise(resolve => {
      this.sendRequestForDeleteCases(cases).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
         resolve(tempData);
       },
       error => {
         alertify.set('notifier', 'position', 'top-right');
         alertify.error(error.error.message);
         resolve([]);
       }
      );
    });
  }


  addpayment(cases) {
    return new Promise(resolve => {
      this.sendRequestForAddPayment(cases).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
         resolve(tempData);
       },
       error => {
         alertify.set('notifier', 'position', 'top-right');
         alertify.error(error.error.message);
         resolve([]);
       }
      );
    });
  }


  addCaseProcess(cases) {
    return new Promise(resolve => {
      this.sendRequestForAddCaseProcess(cases).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
         resolve(tempData);
       },
       error => {
         alertify.set('notifier', 'position', 'top-right');
         alertify.error(error.error.message);
         resolve([]);
       }
      );
    });
  }

}
