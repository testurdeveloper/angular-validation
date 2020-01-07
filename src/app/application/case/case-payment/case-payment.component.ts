import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CaseService } from '../../../_services/case.service';

@Component({
  selector: 'app-case-payment',
  templateUrl: './case-payment.component.html',
  styleUrls: ['./case-payment.component.css']
})
export class CasePaymentComponent implements OnInit {



  selectedClientName: any;
  public selectedCourt;
  public selectedCaseType;
  public selectedCaseNo;
  public selectedCaseTitle;
  public selectedDateOpend;
  token;
  constructor(private router: Router, private route: ActivatedRoute, private caseService: CaseService) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
  }

  user: any = {};
  
  payment: any = {};
  invalieDescription = false;
  invaliedAmount = false;

  ngOnInit() {
    this.getCaseDetailsById();

  }

  async getCaseDetailsById() {
    console.log("this.token", this.token)
    const responce = await this.caseService.getACaseDetails(this.token);
    this.user = responce;
    console.log(responce)
    const client =  this.user.client;
    this.user.clientname = `${client.firstname} ${client.lastname}`;
    this.payment.case_id =this.user
    this.payment.dateopened = this.user.dateopened;
    this.payment.paymentdate= new Date();
  }

  async navigateTocaseprocess() {
    console.log(this.payment)
    const responce:any = await this.caseService.addpayment(this.payment);
    if(responce.success){  
       this.router.navigate([`/case`]);
    }   
  }
}