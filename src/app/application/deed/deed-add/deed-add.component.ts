import { Component, OnInit } from '@angular/core';
import { Client } from '../../../_models/clients';
import { Observable } from 'rxjs/Observable';
import { Deed } from '../../../_models/deed';
import { Router } from '@angular/router';
import { CaseService } from '../../../_services/case.service';
import { ClientService } from '../../../_services/client.service';
import { StaffService } from '../../../_services/staff.service';
import { DeedService } from '../../../_services/deed.service';

@Component({
  selector: 'app-deed-add',
  templateUrl: './deed-add.component.html',
  styleUrls: ['./deed-add.component.css']
})
export class DeedAddComponent implements OnInit {

  selectedClientName: any;
  people$: Observable<Client[]>;

  propertyType: string[];
  selectedPropertytype: string;
  propertyTypeSelected: Number;
  responce: string;

  deedType: string[];
  selectedDeedtype: string;
  deedTypeSelected: Number;

  user: Deed = {
    allfee: false,
    lawyerfee: false,
    stampfee: false,
    documentfee: false,
    typingfee: false,
  };
  invaliedClientname = false;
  invaliedDeedno = false;
  invaliedDateopened = false;
  invaliedPropertytype = false;
  invaliedDeedtype = false;
  invaliedDaybookno = false;
  invaliedDaybookdate = false;
  invaliedRecieveddate = false;
  invaliedDeedfee = false;
  invaliedStatus = false;
  invaliedPropertyaddress = false;
  invaliedOppositeclientname = false;
  oppositeClientphone = false;
  invaliedOppositeclientaddress = false;
  invaliedDeedfeetype = false;

  constructor(
    private router: Router,
    private caseServices: CaseService,
    private clientService: ClientService,
    private staffService: StaffService,
    private DeedService: DeedService
  ) { }

  ngOnInit() {
    this.propertyType = ["Land", "Building", "Gemming", "Vehicales", "Harvest"];

    this.deedType = [
      "Deed of Declaration",
      "Deed of Lease",
      "Deed of Gift",
      "Deed of Transfer",
      "Deed of Partition"
    ];
    this.getAllClents();
  }

  async getAllClents() {
    console.log("get client request");
    const responce: any = await this.clientService.getAllClients();
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      element.name = element.firstname + " " + element.lastname;
    }
    this.people$ = responce;
    // console.log(responce);
  }

  async saveDetails() {
    console.log(this.user)
    const clientData: any = this.people$;
    const client = clientData.find(({ id }) => id === this.user.client);
    const temp: any = this.user;
    temp.client_id = client;
    console.log("temp", temp);
    console.log(JSON.stringify(temp));
    const saveRes: any = await this.DeedService.createNewDeed(temp);
    if (saveRes.success) {
      this.clear();
    }
    // console.log("saveRes", saveRes);
    // this.router.navigate(["case-payment", this.addcase]);
  }

  clear() {
    this.user = {
      allfee: false,
      lawyerfee: false,
      stampfee: false,
      documentfee: false,
      typingfee: false,
    };
  }

  downloadTemplate() {
    if (this.user.deedtype == "Deed of Declaration") {
      window.location.href="http://localhost:4200//assets/deed_template/Deed of Gift - Format.docx"
    } else if (this.user.deedtype == "Deed of Lease") {
      window.location.href="http://localhost:4200//assets/deed_template/Lease Agreement - Format.docx"
    } else if (this.user.deedtype == "Deed of Gift") {
      window.location.href="http://localhost:4200//assets/deed_template/Deed of Gift - Format.docx"
    } else if (this.user.deedtype == "Deed of Transfer") {
      window.location.href="http://localhost:4200//assets/deed_template/Transfer English FORMAT.docx"
    } else if (this.user.deedtype == "Deed of Partition") {
      window.location.href="http://localhost:4200//assets/deed_template/Deed of Gift - Format.docx"
    }else{
      window.location.href="http://localhost:4200//assets/deed_template/Deed of Gift - Format.docx"
    }

  }

}
