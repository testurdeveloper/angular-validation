import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../_services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: any = [];
  searchType = [
    { name: "First Name", value: "firstname" },
    { name: "Last Name", value: "lastname" },
    { name: "Register No", value: "registernumber" }
  ];
  selectedSearch;
  searchDetails: any = {};
  p: any;
  constructor(private clientService: ClientService) {}
  
  ngOnInit() {
    this.getAllClents();
    this.selectedSearch = this.searchType[0].value;
  }

  async getAllClents() {
    console.log("get client request");
    const responce = await this.clientService.getAllClients();
    this.clients = responce;
    console.log(responce);
  }

  reset() {
    this.clients = [];
    this.getAllClents();
    this.searchDetails={};
  }

  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce = await this.clientService.removeClient(client);
      this.getAllClents();
    },
    ()=>{
      alertify.error('Cancel');
    });
  }

}
