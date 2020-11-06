import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


declare const scripts:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  
  

  myForm:FormGroup;
  
  constructor(  ) {}
  
  ngOnInit(): void {
    
     
  }
}
