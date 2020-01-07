import { Component, OnInit } from '@angular/core';
import { Book } from '../../../_models/book';
import { BookService } from '../../../_services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  token;
  constructor(private booksService: BookService,private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
   }


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
    this.getclientDetails(this.token);
  }

  async getclientDetails(token) {
    console.log(
      "get client request", token
    )
    const responce = await this.booksService.getABookDetails(token);
    this.book = responce;
    console.log(responce)

  }

  async saveDetails() {
    const responce:any = await this.booksService.updateBook(this.book)
      if(responce.success){
        console.log("responce", responce);
        this.clear();
      } 
  }

  clear(){
    this.book = {};
    this.book.classification = this.classificationType[0];
    this.ngOnInit();
  }

}
