import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StaffService } from '../../../_services/staff.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff-clerk-edit',
  templateUrl: './staff-clerk-edit.component.html',
  styleUrls: ['./staff-clerk-edit.component.css']
})
export class StaffClerkEditComponent implements OnInit {

  prefixType: string[];
  selectedPrefix: string;
  prefixTypeSelected: Number;
  previewUrl = "assets/staff/addstaff/1.jpg";

  user: Clerk = {

  };
  invaliedFirstname = false;
  invaliedLastname = false;
  invaliedRegisternumber = false;
  invaliedNic = false;
  invaliedEmail = false;
  invaliedMobilenumber = false;
  invaliedPhonenumber = false;
  invaliedAddress1 = false;
  invaliedAddress2 = false;
  invaliedPostalcodee = false;
  invaliedArea = false;
  invaliedExperience = false;
  invaliedPrefix = false;
  invaliedDatetojoine = false;
  invaliedBirthday = false;
  invaliedCalltobar = false;
  invaliedQualifivations = false;
  invaliedGender = false;
  invaliedDesignation = false;

  selectedFiles: FileList;
  currentFileUpload: File;

  @ViewChild('fileInput') fileInput: ElementRef;

  token;
  constructor(private staffService: StaffService,
    private route: ActivatedRoute, private router: Router,
  ) {this.route.params.subscribe(params => {
    this.token = params['id'];
  }); }


  ngOnInit() {
    this.prefixType = [
      "Mr.",
      "Mrs.",
      "Miss.",
    ];
    this.selectedPrefix = this.prefixType[0];
    this.user={};
    this.user.gender="male";
    this.user.designation = "Clerk";

    this.getStaffMenber();
  }

  
  async getStaffMenber(){
    const data:any = await this.staffService.getStaffDetailsBuId(this.token);
    this.user=data;
  }

  async addNewLawyer() {
    this.user.title = this.selectedPrefix;
    console.log(this.user);
    const temp: any = await this.staffService.updateStaffDetails(this.user);
    console.log(temp);
    this.clear();
  }

  onFileChange(event) {
    let reader:any = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log("file", file)
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.user.profileimage = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        }
      };
    }
  }

  clear(){
    this.user={};
    this.ngOnInit();
  }

}
