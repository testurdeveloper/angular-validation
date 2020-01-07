import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { CaseService } from "../../../_services/case.service";
import { ClientService } from "../../../_services/client.service";
import { AddCase } from "../../../_models/addcase";
import { Observable } from "rxjs/Observable";
import { Client } from "../../../_models/clients";
import { StaffService } from "../../../_services/staff.service";
import { Staff } from "../../../_models/staff";




@Component({
  selector: "app-case-add",
  templateUrl: "./case-add.component.html",
  styleUrls: ["./case-add.component.css"]
})
export class CaseAddComponent implements OnInit {
  
  selectedClientName: any;
  public selectedCourt;
  public selectedCaseType;
  public selectedCaseNo;
  public selectedCaseTitle;
  public selectedDateOpend;

  constructor(
    private router: Router,
    private caseServices: CaseService,
    private clientService: ClientService,
    private staffService:StaffService
  ) {}

  addcase: AddCase = {};
  invaliedRegno = false;
  invaliedCaseno = false;
  invaliedCasetitle = false;
  invaliedOppositeclientname = false;
  invaliedPhonenumber = false;
  invaliedoLawyername = false;
  invaliedoLawyeraddress = false;

  /**
   * client select
   */
  keyword = "firstname";
  clients = [];
  people$: Observable<Client[]>;
  staff$: Observable<Staff[]>;
  /**
   * lawyers
   */
  lawyers = [];

  ngOnInit() {
    this.getAllClents();
    this.getAllstaff();
  }

  async getAllClents() {
    console.log("get client request");
    const responce: any = await this.clientService.getAllClients();
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      element.name = element.firstname + " " + element.lastname;
    }
    this.people$ = responce;
    console.log(responce);
  }

  async getAllstaff() {
    console.log("get client request");
    const responce: any = await this.staffService.getStafflist();
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      element.name = element.firstname + " " + element.lastname;
    }
    this.staff$ = responce;
    console.log(responce);
  }

  public navigateTocasepayment() {
    // var dataToCaseprocess = {
    //   court: this.selectedCourt,
    //   caseType: this.selectedCaseType,
    //   caseNo: this.selectedCaseNo,
    //   caseTitle: this.selectedCaseTitle,
    //   clientName: this.selectedClientName,
    //   dateOpend: this.selectedDateOpend
    // };
    // console.log(JSON.stringify(dataToCaseprocess));
    // this.router.navigate(["casepayment", dataToCaseprocess]);
    console.log(this.addcase);
  }

  public navToview(client: any) {
    this.router.navigate(["viewclient", client]);
  }

  async saveDetails() {
    

    const clientData:any = this.people$;
    const client = clientData.find( ({ id }) => id === this.addcase.client );

    const staffData:any = this.staff$;
    const assignedtsss = staffData.find( ({ id }) => id === this.addcase.staff_id );

    const temp:any = this.addcase;
    temp.client = client;
    temp.staff_id = assignedtsss;
    console.log("temp",temp);
    //console.log(JSON.stringify(temp));
    const saveRes:any = await this.caseServices.addCase(temp);
    if(saveRes.success){  
      console.log(saveRes)   
       this.router.navigate([`/case/case-payment/${saveRes.lastid}`]);
    }   
    console.log("saveRes",saveRes);
    // this.router.navigate(["case-payment", this.addcase]);
  }

  clear() {
    this.addcase = {};
  }
}
