import { Component, OnInit } from '@angular/core';
import { Deed } from '../../../_models/deed';
import { ActivatedRoute, Router } from '@angular/router';
import { DeedService } from '../../../_services/deed.service';

@Component({
  selector: 'app-deed-view',
  templateUrl: './deed-view.component.html',
  styleUrls: ['./deed-view.component.css']
})
export class DeedViewComponent implements OnInit {
  deeds:Deed={}
  token;
  constructor(private route: ActivatedRoute, private router: Router,private deedService: DeedService) {
    this.route.params.subscribe(params => {
      this.token = params['id'];
    });
  }


  ngOnInit() {
    this.getclientDetails(this.token);
  }

  async getclientDetails(token) {
    console.log(
      "get client request",token
    )
    const responce:any = await this.deedService.getDeedDetailsBuId(this.token)
    const temp = responce.client_id
    responce.client= `${temp.firstname} ${temp.lastname}`
    this.deeds = responce;
    console.log(responce)

  }

  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce:any = await this.deedService.removeDeedMember(client);
      if(responce){
        this.router.navigate(['/deed']);
      }
    },
    ()=>{
      alertify.error('Cancel');
    });
  }

}
