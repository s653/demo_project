import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { HeaderComponent } from './header/header.component';
import { WhySocraiComponent } from './why-socrai/why-socrai.component';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [ 
{
  path: 'dashboard', canActivate: [AuthGuard],  component: DashboardComponent, 
  children: 
  [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent }
    
  ]
},
{
  path: 'home', component: AppComponent, 
  children: 
  [
    { path: 'header', component: HeaderComponent },
    { path: 'headerContent', component: HeaderContentComponent }
  ]
},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
