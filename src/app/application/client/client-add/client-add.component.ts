import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../_services/client.service';
import { Client } from '../../../_models/clients';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  prefixType: string[];
  selectedPrefix: string;
  prefixTypeSelected: Number;
  responce: string;

  user: Client = {
    title: "Mr."
  };
  invaliedFirstname = false;
  invaliedLastname = false;
  invaliedRegisternumber = false;
  invaliedNic = false;
  invaliedEmail = false;
  invaliedMobilenumber = false;
  invaliedPhonenumber = false;
  invaliedAddress1 = false;
  invaliedAddress2 = false;
  invaliedAddress3 = false;
  invaliedPostalcode = false;
  invaliedMatter = false;
  invaliedPrefix = false;
  invaliedDate = false;
  invaliedGender = false;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.prefixType = ["Mr.", "Mrs.", "Miss."];
    this.user.title = this.prefixType[0];
    this.user.gender = "male";
    
  }

  async saveDetails() {
    if (
      !this.user.firstname ||
      !this.user.lastname ||
      !this.user.registernumber ||
      !this.user.nic ||
      !this.user.gender ||
      !this.user.address1 ||
      !this.user.mobileno
    ) {
      console.log("Required field missing");
      alertify.set('notifier', 'position', 'top-right');
      alertify.error("Required field missing");
    } else {
      console.log(this.user);
      const responce:any = await this.clientService.addClient(this.user);
      if(responce.success){
        console.log("responce", responce);
        this.clear();
      }      
    }
  }

  ngDoCheck() { }

  clear() {
    this.user = {};
    this.user.title = this.prefixType[0];
    this.user.gender = "male";
  }



}
