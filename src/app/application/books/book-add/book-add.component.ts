import { Component, OnInit } from '@angular/core';
import { Book } from '../../../_models/book';
import { BookService } from '../../../_services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  constructor(private booksService: BookService) { }


  classificationType: string[];
  selectedClassification: string;
  classificationTypeSelected: Number;

  dateinput: string;


  book: Book = {};
  invaliedYear = false;
  invaliedVolume = false;
  invaliedAddeddate = false;
  invaliedClassification = false;


  ngOnInit() {
    this.classificationType = [
      "Sri Lanka Law Reports",
      "New Law Reports",
      "Supreme Court Judgement",
      "Court of Appeal Judgement"
    ];
    this.book.classification = this.classificationType[0];
  }


  async saveDetails() {
    const responce:any = await this.booksService.addBook(this.book)
      if(responce.success){
        console.log("responce", responce);
        this.clear();
      } 
  }

  clear(){
    this.book = {};
    this.book.classification = this.classificationType[0];
  }


  ngDoCheck() {


  }
}
