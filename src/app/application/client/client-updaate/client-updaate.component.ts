import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../_services/client.service';
import { Client } from '../../../_models/clients';

@Component({
  selector: 'app-client-updaate',
  templateUrl: './client-updaate.component.html',
  styleUrls: ['./client-updaate.component.css']
})
export class ClientUpdaateComponent implements OnInit {


  prefixType: string[];
  selectedPrefix: string;
  prefixTypeSelected: Number;
  responce: string;
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

  user: Client = {};
  token;
  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
  }

  ngOnInit() {
    this.prefixType = ["Mr.", "Mrs.", "Miss."];
    this.getclientDetails(this.token);
  }

  async getclientDetails(token) {
    console.log(
      "get client request", token
    )
    const responce = await this.clientService.getAClientDetails(token);
    this.user = responce;
    console.log(responce)

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
    } else {
      console.log(this.user);
      const responce = await this.clientService.updateClient(this.user);
      console.log("responce", responce);
    }
  }

  ngDoCheck() { }

  clear() {
    this.user = {};
    this.getclientDetails(this.token);
  }


}
