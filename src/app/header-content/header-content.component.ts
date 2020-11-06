import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.css']
})
export class HeaderContentComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    AOS.init();
  }

}



