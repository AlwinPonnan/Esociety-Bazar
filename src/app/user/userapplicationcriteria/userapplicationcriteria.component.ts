import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userapplicationcriteria',
  templateUrl: './userapplicationcriteria.component.html',
  styleUrls: ['./userapplicationcriteria.component.css']
})
export class UserapplicationcriteriaComponent implements OnInit {
setShowdrop1:boolean=false;
setShowdrop2:boolean=false;
value="Organisation";
arr = ["Organisation","Business","Shop"]

constructor() { }

  ngOnInit() {
  }

  Displayshow(){
    this.setShowdrop1=!this.setShowdrop1;
    console.log(this.setShowdrop1+"asjkhg")
  }
  Displayshow2(){
    this.setShowdrop2=!this.setShowdrop2;
    console.log(this.setShowdrop1+"asjkhg")
  }
  setValue(val)
  {
    this.value = val;
    this.Displayshow2()
  }
}
