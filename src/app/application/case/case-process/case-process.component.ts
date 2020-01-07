import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CaseService } from '../../../_services/case.service';

@Component({
  selector: 'app-case-process',
  templateUrl: './case-process.component.html',
  styleUrls: ['./case-process.component.css']
})
export class CaseProcessComponent implements OnInit {

  token;
  process: any = {};
  CaseProcesslist = [];


  caseProcessTypes = {
    land: [
      'Plaint',
      'Lispendens',
      'Preliminary Survey',
      'Issues of Summons & publications ',
      'Statements of claims',
      'Register reports',
      'Trial ',
      'List of withness & documents',
      'Issues',
      'Evidence',
      'Judgement',
      'Interolocatery decree',
      'Sheme of partition',
      'Finel decree',
      'Delivary of possession of partion land'
    ],
    Money: [
      'Plaint',
      'Answer',
      'Trial',
      'Issues',
      'Evidence',
      'Judgement',
      'Appeal'
    ],
    Divorce: [
      'Plaint',
      'Answer',
      'Trial',
      'Issues',
      'Evidence',
      'Judgement',
      'Appeal'
    ],
    Partition: [
      'Plaint',
      'Lispendens',
      'Prliminary Survey',
      'Issue of summons & publcation',
      'Statement of claims',
      'Register reports',
      'Trail',
      'List of withness & documents',
      'Issues',
      'Evidence',
      'Judgement',
      'Interolocater decree',
    ],
    Adoption: [
      'Petition offrdavit',
      'Respondent objections',
      'Inquries',
      'Judgement',
      'Appeal',
    ],
    Testamentory: [
      'Petition offrdavit',
      'Respondent objections',
      'Inquries',
      'Judgement',
      'Appeal',
    ],
  }



  constructor(private router: Router, private route: ActivatedRoute, private caseService: CaseService) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
  }

  ngOnInit() {
    this.getCaseDetailsById();

  }

  async getCaseDetailsById() {
    console.log("this.token", this.token)
    const responce = await this.caseService.getACaseDetails(this.token);
    this.process = responce;
    console.log(responce)
    const client = this.process.client;
    this.process.clientname = `${client.firstname} ${client.lastname}`;
    this.process.case_id = client;
    this.process.processdate = new Date().toISOString().slice(0, 10);

    this.CaseProcesslist = this.caseProcessTypes[this.process.casetype];
  }

  async saveDetails() {
    console.log("this.process", this.process);
    const saveRes: any = await this.caseService.addCaseProcess(this.process);
    if (saveRes.success) {
      console.log(saveRes)
      this.router.navigate([`/case/case-payment/${this.token}`]);
    }
    console.log("saveRes", saveRes);
    // this.router.navigate(["case-payment", this.addcase]);
  }


}