import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SharedServiceService } from '../shared/shared-service.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  

  constructor(  private authService: AuthService, private formBuilder: FormBuilder) {}
  
  myForm:FormGroup;
  model: any = {};
  response:any;
  values: string[] = [];
  text: string;
  ngOnInit(): void {
    this.authService.logout();
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      c_password: ['', [Validators.required]],
      msg: ['', [Validators.required]]
  });


  }
// convenience getter for easy access to form fields

  onSubmit(values)
  {
    this.authService.saveUser(values).subscribe(
      (res)=> {this.response = res;
        console.log(res);
        
      },
      (err) => { console.error(err); }
    );
        
  }

  sendmsg(text){
    this.authService.getData(text).subscribe(
      (response)=> {if (response.message === 'success') {
        console.log(response);}
        
      },
      (err) => { console.error(err); }
    );
  }

  onLogin(values)
  {
    this.authService.loginForm(values).subscribe(
      (response)=> {if (response.message === 'success') {
        this.authService.setUser(response);
        console.log(response);}
        
      },
      (err) => { console.error(err); }
    );
        
  }
  



  ToContact(){
    document.getElementById('cntct').scrollIntoView({block: 'end',  behavior: 'smooth'})
  }

}
