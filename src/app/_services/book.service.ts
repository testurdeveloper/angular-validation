import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class BookService {

  constructor(private http: HttpClient, private router: Router) {}

  sendRequestForGetAllbook() {
    return this.http.get(`/api/books`);
  }

  sendRequestForGetAbookDetails(id) {
    return this.http.get(`/api/books/` + id);
  }

  sendRequestForAddANewbook(book) {
    return this.http.post(`/api/books`, book);
  }

  sendRequestForUpdatebook(book) {
    return this.http.put(`/api/books`, book);
  }

  sendRequestForDeletebook(book) {
    return this.http.delete(`/api/books/${book.id}`);
  }


  getAllbook() {
    return new Promise(resolve => {
      this.sendRequestForGetAllbook().subscribe(
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

  getABookDetails(id) {
    return new Promise(resolve => {
      this.sendRequestForGetAbookDetails(id).subscribe(
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

  addBook(book) {
    return new Promise(resolve => {
      this.sendRequestForAddANewbook(book).subscribe(
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

  updateBook(book) {
    return new Promise(resolve => {
      this.sendRequestForUpdatebook(book).subscribe(
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

  removeBook(book) {
    return new Promise(resolve => {
      this.sendRequestForDeletebook(book).subscribe(
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
