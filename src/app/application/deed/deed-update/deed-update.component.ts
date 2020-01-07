import { Component, OnInit } from '@angular/core';
import { Deed } from '../../../_models/deed';
import { ActivatedRoute, Router } from '@angular/router';
import { DeedService } from '../../../_services/deed.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../../_models/clients';
import { CaseService } from '../../../_services/case.service';
import { ClientService } from '../../../_services/client.service';
import { StaffService } from '../../../_services/staff.service';

@Component({
  selector: 'app-deed-update',
  templateUrl: './deed-update.component.html',
  styleUrls: ['./deed-update.component.css']
})
export class DeedUpdateComponent implements OnInit {

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
    allfee:false,
    lawyerfee:false,
    stampfee:false,
    documentfee:false,
    typingfee:false,
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
  token;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private caseServices: CaseService,
    private clientService: ClientService,
    private staffService: StaffService,
    private deedService:DeedService
  ) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
  }

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
    this.getclientDetails(this.token);
  }


  async getclientDetails(token) {
    console.log(
      "get client request",token
    )
    const responce:any = await this.deedService.getDeedDetailsBuId(this.token)
    const temp = responce.client_id
    responce.client= `${temp.firstname} ${temp.lastname}`;

    const clientData:any = this.people$;
    const client_id = clientData.find( ({ id }) => id === temp.id);

    const te = responce;
    te.client = client_id.id;
    this.user = te;
    console.log(responce)

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
    const temp:any = this.user;
    temp.client_id = client;
    console.log("temp", temp);
    console.log(JSON.stringify(temp));
    const saveRes: any = await this.deedService.updateDeedDetails(temp);
    if (saveRes.success) {
     this.clear();
     this.ngOnInit();
    }
    // console.log("saveRes", saveRes);
    // this.router.navigate(["case-payment", this.addcase]);
  }

  clear() {
    this.user = {
      allfee:false,
      lawyerfee:false,
      stampfee:false,
      documentfee:false,
      typingfee:false,
    };
  }

  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce:any = await this.deedService.removeDeedMember(client);
      if(responce){
        this.router.navigate(['/deed']);
      }
    },
    ()=>{
      alertify.error('Cancel');
    });
  }

}
