import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeedService } from '../../../_services/deed.service';

@Component({
  selector: 'app-deed-list',
  templateUrl: './deed-list.component.html',
  styleUrls: ['./deed-list.component.css']
})
export class DeedListComponent implements OnInit {

  constructor(private deedService: DeedService, private router: Router) {}
  p: any;
  dcategoryType: any;
  selectedDeedCategory: string;
  categoryTypeSelected: Number;
  selectedSearch;
  searchDetails: any = {};

  deeds: any = [];

  ngOnInit() {
    this.dcategoryType = [
      { name: "Deed No", value: "deedno" },
      { name: "Client Name", value: "clientname" },
      { name: "Deed Type", value: "DeedType" },
      { name: "Property Type", value: "PropertyType" }
    ];
    this.selectedSearch = this.dcategoryType[0].value;
    this.getAllClents();
  }

  public navToview(deed: any) {
    this.router.navigate(["deeddetail", deed]);
  }

  async getAllClents() {
    console.log("get client request");
    const responce:any = await this.deedService.getDeedlist();
    for (let index = 0; index < responce.length; index++) {
      const element = responce[index];
      const temp = element.client_id
      responce[index].clientname= `${temp.firstname} ${temp.lastname}`
    }
    this.deeds = responce;

    console.log(responce);
  }

  reset() {
    this.deeds = [];
    this.getAllClents();
    this.searchDetails = {};
  }

  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce:any = await this.deedService.removeDeedMember(client);
      if(responce){
       this.reset();
      }
    },
    ()=>{
      alertify.error('Cancel');
    });
  }

}
