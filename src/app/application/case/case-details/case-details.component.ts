import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CaseService } from "../../../_services/case.service";

@Component({
  selector: "app-case-details",
  templateUrl: "./case-details.component.html",
  styleUrls: ["./case-details.component.css"]
})
export class CaseDetailsComponent implements OnInit {
  cases = {};
  token;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private caseService: CaseService
  ) {
    this.route.params.subscribe(params => {
      this.token = params["id"];

    });
  }

  ngOnInit() {
    this.getCaseDetailsById();
      
  }

  async getCaseDetailsById() {
     console.log("this.token",this.token)
    const responce = await this.caseService.getACaseDetails(this.token);
    this.cases=responce;
    console.log(this.cases)
  }

  async deleteClient(client){
    alertify.confirm("Confirm","Are you really want to delete this record?",
    async ()=>  {
      const responce = await this.caseService.removeCase(client);
      if(responce){
        this.router.navigate(['/case']);
      }
    },
    ()=>{
      alertify.error('Cancel');
    });
  }
}
