import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SharedServiceService } from './shared/shared-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { HeaderContentComponent } from './header-content/header-content.component';
import { WhySocraiComponent } from './why-socrai/why-socrai.component';
import { FooterComponent } from './footer/footer.component';
import { HttpIntercetor } from './_services/http-intercetor';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    DashboardComponent,
    NavigationComponent,
    ContentComponent,
    HeaderContentComponent,
    WhySocraiComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA83vznrzud7ERbcRybALlAacD320z84B4'
    })
   ],
  providers: [SharedServiceService,
  {
    provide:HttpIntercetor,
    useClass: HttpIntercetor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
