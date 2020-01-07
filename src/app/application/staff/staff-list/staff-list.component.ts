import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../../../_services/staff.service';
import { Staff } from '../../../_models/staff';


@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  staffs: Array<Staff> = [];

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit() {
    this.getStaffDetails();
  }

  async getStaffDetails() {
    const temp: any = await this.staffService.getStafflist();
    this.staffs = temp;
  }

}
