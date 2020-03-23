import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqaccordian',
  templateUrl: './faqaccordian.component.html',
  styleUrls: ['./faqaccordian.component.css']
})
export class FAQaccordianComponent implements OnInit {
show;
  constructor() { }

  ngOnInit() {
  }

  shows(show){
    this.show=show

  }
}
