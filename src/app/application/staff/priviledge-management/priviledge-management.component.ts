import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../_services/staff.service';

@Component({
  selector: 'app-priviledge-management',
  templateUrl: './priviledge-management.component.html',
  styleUrls: ['./priviledge-management.component.css']
})
export class PriviledgeManagementComponent implements OnInit {

  constructor(private staffService: StaffService) { }
  roles: any = [];
  selectedOriSource;
  allpreviladges: any = [];
  feature: Features = {
    userManagement_View: false,
    userManagement_create: false,
    userManagement_Update: false,
    userManagement_Delete: false,
    clientManagement_View: false,
    clientManagement_create: false,
    clientManagement_Update: false,
    clientManagement_Delete: false,
    caseManagement_View: false,
    caseManagement_create: false,
    caseManagement_Update: false,
    caseManagement_Delete: false,
    deedManagement_View: false,
    deedManagement_create: false,
    deedManagement_Update: false,
    deedManagement_Delete: false,
    eventManagement_View: false,
    eventManagement_create: false,
    eventManagement_Update: false,
    eventManagement_Delete: false,
    booksManagement_View: false,
    booksManagement_create: false,
    booksManagement_Update: false,
    booksManagement_Delete: false,
    reportManagement_View: false,
    reportManagement_create: false,
    reportManagement_Update: false,
    reportManagement_Delete: false,
    backupManagement_View: false,
    backupManagement_create: false,
    backupManagement_Update: false,
    backupManagement_Delete: false,
  };

  ngOnInit() {
    this.getroles();
  }

  async getroles() {
    const res = await this.staffService.getRolelist();
    // console.log(res)
    this.roles = res;
    this.feature.roleids = this.roles[0].id;
    const prev = await this.staffService.getPrivilladgelist();
    this.allpreviladges = prev;
    this.getrolesById();

  }

  async getrolesById() {
    const res: any = await this.staffService.getSRoleDetailsBuId(this.feature.roleids);
    // console.log(res)
    this.selectedOriSource = res;
    const receivedP = res.privileges;
    this.allpreviladges.forEach(element => {
      const temp = element.name;
      const result = receivedP.find(({ name }) => name === temp);
      if (result) {
        this.feature[temp] = true
      } else {
        this.feature[temp] = false
      }

    });
    // console.log("this.feature", this.feature)
  }


  async save() {
    // console.log(this.feature)
    // this.selectedOriSource
    const temp = [];
    this.allpreviladges.forEach(element => {
      if (this.feature[element.name] == true) {
        temp.push(element);
      } else {

      }
    });

    // console.log(temp)

    this.selectedOriSource.privileges = temp;

    const res = await this.staffService.updateSRoleDetails(this.selectedOriSource)
    this.reset();
  }

  reset() {
    this.feature = {
      userManagement_View: false,
      userManagement_create: false,
      userManagement_Update: false,
      userManagement_Delete: false,
      clientManagement_View: false,
      clientManagement_create: false,
      clientManagement_Update: false,
      clientManagement_Delete: false,
      caseManagement_View: false,
      caseManagement_create: false,
      caseManagement_Update: false,
      caseManagement_Delete: false,
      deedManagement_View: false,
      deedManagement_create: false,
      deedManagement_Update: false,
      deedManagement_Delete: false,
      eventManagement_View: false,
      eventManagement_create: false,
      eventManagement_Update: false,
      eventManagement_Delete: false,
      booksManagement_View: false,
      booksManagement_create: false,
      booksManagement_Update: false,
      booksManagement_Delete: false,
      reportManagement_View: false,
      reportManagement_create: false,
      reportManagement_Update: false,
      reportManagement_Delete: false,
      backupManagement_View: false,
      backupManagement_create: false,
      backupManagement_Update: false,
      backupManagement_Delete: false,
    };
    this.ngOnInit();
  }

  changeRole(){
    this.getrolesById();
  }

}
