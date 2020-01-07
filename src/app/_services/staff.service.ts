import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class StaffService {

  constructor(private http: HttpClient, private router: Router) {}

  sendRequestForGetAllStaff() {
    return this.http.get(`/api/staff`);
  }

  sendRequestForGetAStaffsDetails(id) {
    return this.http.get(`/api/staff/` + id);
  }

  sendRequestForAddANewStaff(staff) {
    return this.http.post(`/api/auth/signup`, staff);
  }

  sendRequestForUpdateStaff(staff) {
    return this.http.put(`/api/staff`, staff);
  }

  sendRequestForDeleteStaff(staff) {
    return this.http.delete(`/api/staff/${staff.id}`);
  }

  sendRequestForGetAllRoles() {
    return this.http.get(`/api/role`);
  }

  getStafflist() {
    return new Promise(resolve => {
      this.sendRequestForGetAllStaff().subscribe(
        data => {
          const tempData: any = data || [];
          // console.log(tempData)
          resolve(tempData);
        },
        error => {
          console.log("Error", error);
          resolve([]);
        }
      );
    });
  }

  sendRequestForGetARoleDetails(id) {
    return this.http.get(`/api/role/` + id);
  }

  sendRequestForUpdateRole(staff) {
    return this.http.put(`/api/role`, staff);
  }

  sendRequestForGetPreviladge() {
    return this.http.get(`/api/privilladge`);
  }

  getPrivilladgelist() {
    return new Promise(resolve => {
      this.sendRequestForGetPreviladge().subscribe(
        data => {
          const tempData: any = data || [];
          // console.log(tempData)
          resolve(tempData);
        },
        error => {
          console.log("Error", error);
          resolve([]);
        }
      );
    });
  }

  getStaffDetailsBuId(staff) {
    return new Promise(resolve => {
      this.sendRequestForGetAStaffsDetails(staff).subscribe(
        data => {
          const tempData: any = data || {};
        //  console.log(tempData)
          resolve(tempData);
        },
        error => {
          console.log("Error", error);
          resolve({});
        }
      );
    });
  }

  createNewStaff(staff) {
    return new Promise(resolve => {
      staff.username = staff.firstname + " " + staff.lastname;
      staff.name = staff.firstname + " " + staff.lastname;
      staff.password = staff.nic;

      this.sendRequestForAddANewStaff(staff).subscribe(
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

  updateStaffDetails(staff) {
    return new Promise(resolve => {
      this.sendRequestForUpdateStaff(staff).subscribe(
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

  removeStaffMember(staff) {
    return new Promise(resolve => {
      this.sendRequestForDeleteStaff(staff).subscribe(
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


  getRolelist() {
    return new Promise(resolve => {
      this.sendRequestForGetAllRoles().subscribe(
        data => {
          const tempData: any = data || [];
          // console.log(tempData)
          resolve(tempData);
        },
        error => {
          console.log("Error", error);
          resolve([]);
        }
      );
    });
  }

  getSRoleDetailsBuId(staff) {
    return new Promise(resolve => {
      this.sendRequestForGetARoleDetails(staff).subscribe(
        data => {
          const tempData: any = data || {};
        //  console.log(tempData)
          resolve(tempData);
        },
        error => {
          console.log("Error", error);
          resolve({});
        }
      );
    });
  }


  updateSRoleDetails(staff) {
    return new Promise(resolve => {
      this.sendRequestForUpdateRole(staff).subscribe(
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
