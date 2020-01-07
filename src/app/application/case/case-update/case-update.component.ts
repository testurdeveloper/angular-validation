import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AddCase } from "../../../_models/addcase";
import { CaseService } from "../../../_services/case.service";
import { ClientService } from "../../../_services/client.service";
import { Observable } from "rxjs/Observable";
import { Client } from "../../../_models/clients";
import { Staff } from "../../../_models/staff";
import { StaffService } from "../../../_services/staff.service";


@Component({
  selector: "app-case-update",
  templateUrl: "./case-update.component.html",
  styleUrls: ["./case-update.component.css"]
})
export class CaseUpdateComponent implements OnInit {
  selectedClientName: any;
  public selectedCourt;
  public selectedCaseType;
  public selectedCaseNo;
  public selectedCaseTitle;
  public selectedDateOpend;
  initClient = {};
  initlawyer = {};

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

  token;
  clientinitval = {};
  lawyerinitval = {};
  people$: Observable<Client[]>;
  staff$: Observable<Staff[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private caseService: CaseService,
    private clientService: ClientService,
    private staffService:StaffService
  ) {
    this.route.params.subscribe(params => {
      this.token = params["id"];
    });
  }

  ngOnInit() {
    this.getAllClents();
    this.getAllstaff();
    this.getCaseDetailsById();
  }

  async getCaseDetailsById() {
    console.log("get client request");
    const responce: any = await this.clientService.getAllClients();
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      element.name = element.firstname + " " + element.lastname;
    }
    this.people$ = responce;


    const responce3: any = await this.staffService.getStafflist();
    for (let index = 0; index < responce3.length; index++) {
      const element = responce3[index];
      element.name = element.firstname + " " + element.lastname;
    }
    this.staff$ = responce3;

    const responce2: any = await this.caseService.getACaseDetails(this.token);
    const tmp: any = responce2;
    console.log("responce2",responce2)
   
    if(responce2.client && responce2.client.id){
      tmp.client = tmp.client.id
    }

    if(tmp.staff_id && tmp.staff_id.id){
      tmp.staff_id = tmp.staff_id.id
    }

    setTimeout(() => {
      this.addcase = tmp;
    }, 2000);
    
  }

  async getAllClents() {
    
  }

  async getAllstaff() {
    // console.log("get client request");
    
    // console.log(responce);
  }

  selectEvent(item) {
    // do something with selected item
    this.addcase.client = item;
    console.log(this.addcase.client);
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

  /**
   * lawyers
   */
  lawyers = [];

  selectlawyerEvent(item) {
    // do something with selected item
    console.log(this.addcase.client);
  }

  onChangeLAWYERSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onLAWYERFocused(e) {
    // do something
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
   
    const saveRes = await this.caseService.updateCase(temp);
    console.log("saveRes", saveRes);
    // this.router.navigate(["case-payment", this.addcase]);
  }

  clear() {

    location.reload();
  }
}
