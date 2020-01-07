import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { CaseService } from "../../../_services/case.service";


@Component({
  selector: "app-case-list",
  templateUrl: "./case-list.component.html",
  styleUrls: ["./case-list.component.css"]
})
export class CaseListComponent implements OnInit {
  cases = [];

  categoryType: string[];
  selectedCategory: string;
  searchTypeSelected: Number;

  searchType = [
    { name: "Client Name", value: "client" },
    { name: "Opposite Client Name", value: "oppositeclientname" },
    { name: "Case No", value: "caseno" },
    { name: "Case Title", value: "casetitle" },
    { name: "Court", value: "court" }
  ];
  selectedSearch;
  searchDetails: any = {};
  p: any;

  constructor(private caseService: CaseService) { }

  ngOnInit() {
    this.categoryType = [
      "Client Name",
      "Opposite Client Name",
      "Case No",
      "Case Title",
      "Court"
    ];
    this.selectedCategory = this.categoryType[0];
    this.selectedSearch = this.searchType[0].value;
    this.getAllcases();
  }

  async getAllcases() {
    const responce: any = await this.caseService.getAllCases();
    this.cases = responce;
    console.log(this.cases);
  }

  async deleteClient(client) {
    alertify.confirm("Confirm", "Are you really want to delete this record?",
      async () => {
        const responce = await this.caseService.removeCase(client);
        this.getAllcases();
      },
      () => {
        alertify.error('Cancel');
      });
  }
}
