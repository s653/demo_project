import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  lat: number = 44.5403;
  lon: number =  -78.5463;

  ngOnInit(): void {
  }

}
