import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { LoginComponent } from './authentication/login/login.component';
import { NgxPaginationModule } from "ngx-pagination";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';


import { PasswordResetComponent } from './authentication/password-reset/password-reset.component';
import { DashoardComponent } from './application/dashoard/dashoard.component';
import { ForgetPasswordComponent } from './authentication/forget-password/forget-password.component';
import { TopNavbarComponent } from './application/components/top-navbar/top-navbar.component';
import { StaffListComponent } from './application/staff/staff-list/staff-list.component';
import { LeftMenuComponent } from './application/components/left-menu/left-menu.component';
import { ClientListComponent } from './application/client/client-list/client-list.component';
import { ClientAddComponent } from './application/client/client-add/client-add.component';
import { ClientUpdaateComponent } from './application/client/client-updaate/client-updaate.component';
import { ClientViewComponent } from './application/client/client-view/client-view.component';
import { CaseFilterPipe } from './_filters/case-filter.pipe';
import { ClientFileterPipe } from './_filters/client-fileter.pipe';
import { CaseService } from './_services/case.service';
import { StaffService } from './_services/staff.service';
import { ClientService } from './_services/client.service';
import { CaseListComponent } from './application/case/case-list/case-list.component';
import { CaseAddComponent } from './application/case/case-add/case-add.component';
import { CasePaymentComponent } from './application/case/case-payment/case-payment.component';
import { CaseProcessComponent } from './application/case/case-process/case-process.component';
import { CaseDetailsComponent } from './application/case/case-details/case-details.component';
import { CaseUpdateComponent } from './application/case/case-update/case-update.component';
import { StaffLawyerAddComponent } from './application/staff/staff-lawyer-add/staff-lawyer-add.component';
import { StaffLawyerEditComponent } from './application/staff/staff-lawyer-edit/staff-lawyer-edit.component';
import { StaffClerkAddComponent } from './application/staff/staff-clerk-add/staff-clerk-add.component';
import { StaffClerkEditComponent } from './application/staff/staff-clerk-edit/staff-clerk-edit.component';
import { ViewDetailsComponent } from './application/staff/view-details/view-details.component';
import { AdminSignupComponent } from './authentication/admin-signup/admin-signup.component';
import { EventAddComponent } from './application/event/event-add/event-add.component';



import { FullCalendarModule } from 'ng-fullcalendar';
import { EventCalenderComponent } from './application/event/event-calender/event-calender.component';
import { DeedListComponent } from './application/deed/deed-list/deed-list.component';
import { DeedAddComponent } from './application/deed/deed-add/deed-add.component';
import { DeedFilterPipe } from './_filters/deed-filter.pipe';
import { DeedService } from './_services/deed.service';
import { EventService } from './_services/event.service';
import { DeedViewComponent } from './application/deed/deed-view/deed-view.component';
import { DeedUpdateComponent } from './application/deed/deed-update/deed-update.component';
import { BookListComponent } from './application/books/book-list/book-list.component';
import { BookAddComponent } from './application/books/book-add/book-add.component';
import { BookService } from './_services/book.service';
import { BookFilterPipe } from './_filters/book-filter.pipe';
import { BookUpdateComponent } from './application/books/book-update/book-update.component';
import { UserManagementComponent } from './application/staff/user-management/user-management.component';
import { PriviledgeManagementComponent } from './application/staff/priviledge-management/priviledge-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordResetComponent,
    DashoardComponent,
    ForgetPasswordComponent,
    TopNavbarComponent,
    StaffListComponent,
    LeftMenuComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientUpdaateComponent,
    ClientViewComponent,
    CaseFilterPipe,
    ClientFileterPipe,
    CaseListComponent,
    CaseAddComponent,
    CasePaymentComponent,
    CaseProcessComponent,
    CaseDetailsComponent,
    CaseUpdateComponent,
    StaffListComponent,
    StaffLawyerAddComponent,
    StaffLawyerEditComponent,
    StaffClerkAddComponent,
    StaffClerkEditComponent,
    ViewDetailsComponent,
    AdminSignupComponent,
    EventAddComponent,
    EventCalenderComponent,
    DeedListComponent,
    DeedAddComponent,
    DeedFilterPipe,
    DeedViewComponent,
    DeedUpdateComponent,
    BookListComponent,
    BookAddComponent,
    BookFilterPipe,
    BookUpdateComponent,
    UserManagementComponent,
    PriviledgeManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule,
    NgOptionHighlightModule,
    FullCalendarModule
    // AutocompleteLibModule,
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ClientService,
    StaffService,
    CaseService,
    DeedService,
    UserService,
    BookService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    EventService
    // providers used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
