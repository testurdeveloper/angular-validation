import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashoardComponent } from './application/dashoard/dashoard.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { ClientListComponent } from './application/client/client-list/client-list.component';
import { ClientAddComponent } from './application/client/client-add/client-add.component';
import { ClientViewComponent } from './application/client/client-view/client-view.component';
import { ClientUpdaateComponent } from './application/client/client-updaate/client-updaate.component';
import { CaseListComponent } from './application/case/case-list/case-list.component';
import { CaseAddComponent } from './application/case/case-add/case-add.component';
import { CasePaymentComponent } from './application/case/case-payment/case-payment.component';
import { CaseProcessComponent } from './application/case/case-process/case-process.component';
import { CaseDetailsComponent } from './application/case/case-details/case-details.component';
import { CaseUpdateComponent } from './application/case/case-update/case-update.component';
import { StaffListComponent } from './application/staff/staff-list/staff-list.component';
import { StaffLawyerAddComponent } from './application/staff/staff-lawyer-add/staff-lawyer-add.component';
import { StaffLawyerEditComponent } from './application/staff/staff-lawyer-edit/staff-lawyer-edit.component';
import { StaffClerkAddComponent } from './application/staff/staff-clerk-add/staff-clerk-add.component';
import { StaffClerkEditComponent } from './application/staff/staff-clerk-edit/staff-clerk-edit.component';
import { ViewDetailsComponent } from './application/staff/view-details/view-details.component';
import { AdminSignupComponent } from './authentication/admin-signup/admin-signup.component';
import { EventAddComponent } from './application/event/event-add/event-add.component';
import { EventCalenderComponent } from './application/event/event-calender/event-calender.component';
import { DeedListComponent } from './application/deed/deed-list/deed-list.component';
import { DeedAddComponent } from './application/deed/deed-add/deed-add.component';
import { DeedViewComponent } from './application/deed/deed-view/deed-view.component';
import { DeedUpdateComponent } from './application/deed/deed-update/deed-update.component';
import { BookListComponent } from './application/books/book-list/book-list.component';
import { BookAddComponent } from './application/books/book-add/book-add.component';
import { BookUpdateComponent } from './application/books/book-update/book-update.component';
import { UserManagementComponent } from './application/staff/user-management/user-management.component';
import { PriviledgeManagementComponent } from './application/staff/priviledge-management/priviledge-management.component';


const routes: Routes = [
  { path: '', component: DashoardComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'admin-signup', component: AdminSignupComponent },
  {
    path: 'staff', children: [
      { path: '', component: StaffListComponent,  },
      { path: 'lawyer-add', component: StaffLawyerAddComponent,  },
      { path: 'lawyer-edit/:id', component: StaffLawyerEditComponent,  },
      { path: 'clerk-add', component: StaffClerkAddComponent,  },
      { path: 'clerk-edit/:id', component: StaffClerkEditComponent,  },
      { path: 'view-details/:id', component: ViewDetailsComponent,  },
      { path: 'user-management', component: UserManagementComponent,  },
      { path: 'previladge-management', component: PriviledgeManagementComponent,  },
    ],
  },
  {
    path: "client",
    children: [
      { path: "", component: ClientListComponent,  },
      { path: "client-add", component: ClientAddComponent,  },
      { path: "client-view/:id", component: ClientViewComponent,  },
      { path: "client-update/:id", component: ClientUpdaateComponent,  }
    ]
  },
  {
    path: "case",
    children: [
      { path: "", component: CaseListComponent,  },
      { path: "case-add", component: CaseAddComponent,  },
      // { path: "case-view/:id", component: ViewClientComponent },
      { path: "case-payment/:id", component: CasePaymentComponent,  },
      { path: "case-process/:id", component: CaseProcessComponent,  },
      { path: "case-details/:id", component: CaseDetailsComponent,  },
      { path: "case-update/:id", component: CaseUpdateComponent,  }
    ]
  },
  {
    path: "event",
    children: [
      { path: "", component: EventCalenderComponent,  },
      { path: "event-add", component: EventAddComponent,  },
    ]
  },
  {
    path: "deed",
    children: [
      { path: "", component: DeedListComponent,  },
      { path: "deed-add", component: DeedAddComponent,  },
      { path: "deed-view/:id", component: DeedViewComponent,  },
      { path: "deed-update/:id", component: DeedUpdateComponent,  },
    ]
  },
  {
    path: "book",
    children: [
      { path: "", component: BookListComponent,  },
      { path: "book-add", component: BookAddComponent,  },
      // { path: "book-view/:id", component: DeedViewComponent,  },
      { path: "book-update/:id", component: BookUpdateComponent,  },
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
