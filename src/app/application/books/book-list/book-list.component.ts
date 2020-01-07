import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../_services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  searchType = [
    { name: "SLR", value: "Sri Lanka Law Reports" },
    { name: "NLR", value: "New Law Reports" },
    { name: "Other Law Books", value: "Supreme Court Judgement,Court of Appeal Judgement" }
  ];
  selectedSearch;
  searchDetails: any = {};
  p: any;

  constructor(private booklistService: BookService) { }

  bookcategoryType: string[];
  selectedbookcategory: string;
  bookcategoryTypeSelected: Number;

  books = [];


  ngOnInit() {
    this.getAllClents();
    this.selectedSearch = this.searchType[0].value;
  }

  async getAllClents() {
    console.log("get client request");
    const responce: any = await this.booklistService.getAllbook();
    this.books = responce;
    console.log(responce);
  }

  reset() {
    this.books = [];
    this.getAllClents();
    this.searchDetails = {};
  }

  async deleteClient(client) {
    alertify.confirm("Confirm", "Are you really want to delete this record?",
      async () => {
        const responce = await this.booklistService.removeBook(client);
        this.getAllClents();
      },
      () => {
        alertify.error('Cancel');
      });
  }

}
