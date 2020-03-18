import { Component, OnInit } from '@angular/core';
// import { chown } from 'fs';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
show=1;
  constructor() { }

  ngOnInit() {
  }
  showPage(show){
    this.show=show;
    console.log(show)
  }

}
