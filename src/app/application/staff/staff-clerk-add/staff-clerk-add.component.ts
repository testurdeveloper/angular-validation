import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StaffService } from '../../../_services/staff.service';


@Component({
  selector: 'app-staff-clerk-add',
  templateUrl: './staff-clerk-add.component.html',
  styleUrls: ['./staff-clerk-add.component.css']
})
export class StaffClerkAddComponent implements OnInit {

  
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

  constructor(private staffService: StaffService,
    // rivate uploadService: FileuploadService
  ) { }



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

  }


  async addNewLawyer() {
    this.user.title = this.selectedPrefix;
    console.log(this.user);
    const temp: any = await this.staffService.createNewStaff(this.user);
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
    this.user.gender="male";
    this.user.designation = "Clerk";
    this.previewUrl = "assets/staff/addstaff/1.jpg";
  }

}
