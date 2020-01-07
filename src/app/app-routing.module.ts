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
  { path: '', component: DashoardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin-signup', component: AdminSignupComponent },
  {
    path: 'staff', children: [
      { path: '', component: StaffListComponent, canActivate: [AuthGuard] },
      { path: 'lawyer-add', component: StaffLawyerAddComponent, canActivate: [AuthGuard] },
      { path: 'lawyer-edit/:id', component: StaffLawyerEditComponent, canActivate: [AuthGuard] },
      { path: 'clerk-add', component: StaffClerkAddComponent, canActivate: [AuthGuard] },
      { path: 'clerk-edit/:id', component: StaffClerkEditComponent, canActivate: [AuthGuard] },
      { path: 'view-details/:id', component: ViewDetailsComponent, canActivate: [AuthGuard] },
      { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard] },
      { path: 'previladge-management', component: PriviledgeManagementComponent, canActivate: [AuthGuard] },
    ],
  },
  {
    path: "client",
    children: [
      { path: "", component: ClientListComponent, canActivate: [AuthGuard] },
      { path: "client-add", component: ClientAddComponent, canActivate: [AuthGuard] },
      { path: "client-view/:id", component: ClientViewComponent, canActivate: [AuthGuard] },
      { path: "client-update/:id", component: ClientUpdaateComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: "case",
    children: [
      { path: "", component: CaseListComponent, canActivate: [AuthGuard] },
      { path: "case-add", component: CaseAddComponent, canActivate: [AuthGuard] },
      // { path: "case-view/:id", component: ViewClientComponent },
      { path: "case-payment/:id", component: CasePaymentComponent, canActivate: [AuthGuard] },
      { path: "case-process/:id", component: CaseProcessComponent, canActivate: [AuthGuard] },
      { path: "case-details/:id", component: CaseDetailsComponent, canActivate: [AuthGuard] },
      { path: "case-update/:id", component: CaseUpdateComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: "event",
    children: [
      { path: "", component: EventCalenderComponent, canActivate: [AuthGuard] },
      { path: "event-add", component: EventAddComponent, canActivate: [AuthGuard] },
    ]
  },
  {
    path: "deed",
    children: [
      { path: "", component: DeedListComponent, canActivate: [AuthGuard] },
      { path: "deed-add", component: DeedAddComponent, canActivate: [AuthGuard] },
      { path: "deed-view/:id", component: DeedViewComponent, canActivate: [AuthGuard] },
      { path: "deed-update/:id", component: DeedUpdateComponent, canActivate: [AuthGuard] },
    ]
  },
  {
    path: "book",
    children: [
      { path: "", component: BookListComponent, canActivate: [AuthGuard] },
      { path: "book-add", component: BookAddComponent, canActivate: [AuthGuard] },
      // { path: "book-view/:id", component: DeedViewComponent, canActivate: [AuthGuard] },
      { path: "book-update/:id", component: BookUpdateComponent, canActivate: [AuthGuard] },
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
