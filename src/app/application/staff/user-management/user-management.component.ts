import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../_models/staff';
import { StaffService } from '../../../_services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  staffs: Array<Staff> = [];
  p: any;
  selectedDeedCategory: string;
  categoryTypeSelected: Number;
  selectedSearch;
  searchDetails: any = {};

  dcategoryType = [
    { name: "First name", value: "firstname" },
    { name: "Last Name", value: "lastname" },
    { name: "NIC", value: "nic" },
    { name: "email", value: "email" }
  ];

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    this.selectedSearch = this.dcategoryType[0].value;
    this.getStaffDetails();
  }

  async getStaffDetails() {
    const temp: any = await this.staffService.getStafflist();
    this.staffs = temp;
  }

  async deleteClient(staff){

  }


}
