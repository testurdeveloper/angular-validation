import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../../_services/staff.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  staffs:any={}
  token;
  constructor(private route: ActivatedRoute, private router: Router,private staffService:StaffService) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
  }

  ngOnInit() {
    this.getStaffMenber();
  }

  async getStaffMenber(){
    const data:any = await this.staffService.getStaffDetailsBuId(this.token);
    this.staffs=data;
  }


  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce:any = await this.staffService.removeStaffMember(client)
      if(responce){
       this.ngOnInit();
      }
    },
    ()=>{
      alertify.error('Cancel');
    });
  }

  redirectoUpdate(staff){
    if(staff.designation=="Clerk"){
      this.router.navigate([`/staff/clerk-edit/${staff.id}`]);
    }else{
      this.router.navigate([`/staff/lawyer-edit/${staff.id}`]);
    }
  }
}
