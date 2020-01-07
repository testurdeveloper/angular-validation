import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private route: ActivatedRoute,
    private router: Router) { }
  username = ""
  ngOnInit() {
this.getUserDetails();
  }

  async getUserDetails() {

    // const user: any = JSON.parse(localStorage.getItem('currentuser'));

    // this.username = user.username;
    // console.log("this.username",user)
  }

  async logout() {
    const e = await this.authService.logout();
    this.router.navigate(['/']);
  }

}
