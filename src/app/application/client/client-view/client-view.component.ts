import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../_services/client.service';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

 
  clients:any = {};
  token;
  constructor(private route: ActivatedRoute, private router: Router,private clientService: ClientService) {
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
    const responce = await this.clientService.getAClientDetails(token);
    this.clients = responce;
    console.log(responce)

  }

  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce:any = await this.clientService.removeClient(client);
      if(responce){
        this.router.navigate(['/client']);
      }
    },
    ()=>{
      alertify.error('Cancel');
    });
  }
}
