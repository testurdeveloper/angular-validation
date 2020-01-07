import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ClientService {

  clients = [];

  constructor(private http: HttpClient, private router: Router) {
    this.clients = [];
  }

  sendRequestForGetAllClients() {
    return this.http.get(`/api/clients`);
  }

  sendRequestForGetAClientsDetails(id) {
    return this.http.get(`/api/clients/` + id);
  }

  sendRequestForAddANewClient(client) {
    return this.http.post(`/api/clients`, client);
  }

  sendRequestForUpdateClient(client) {
    return this.http.put(`/api/clients`, client);
  }

  sendRequestForDeleteClient(client) {
    return this.http.delete(`/api/clients/${client.id}`);
  }

  getAllClients() {
    return new Promise(resolve => {
      this.sendRequestForGetAllClients().subscribe(
        data => {
          const tempData: any = data || [];
          // const body = JSON.parse(tempData._body);
          // console.log(body);
          //test
          resolve(tempData);
        },
        error => {
          // alertify.set('notifier', 'position', 'top-right');
          // alertify.error(error._body);
          resolve([]);
        }
      );
    });
  }

  getAClientDetails(id) {
    return new Promise(resolve => {
      this.sendRequestForGetAClientsDetails(id).subscribe(
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

  addClient(client) {
    return new Promise(resolve => {
      this.sendRequestForAddANewClient(client).subscribe(
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

  updateClient(client) {
    return new Promise(resolve => {
      this.sendRequestForUpdateClient(client).subscribe(
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

  removeClient(client) {
    return new Promise(resolve => {
      this.sendRequestForDeleteClient(client).subscribe(
        data => {
          const tempData: any = data || {};
          alertify.set('notifier', 'position', 'top-right');
          alertify.success(tempData.message);
         resolve(tempData);
       },
       error => {
         alertify.set('notifier', 'position', 'top-right');
         alertify.error(error.error.message);
         resolve();
       }
      );
    });
  }

}
