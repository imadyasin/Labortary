import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  constructor(private router: Router){}
  func(){
    this.router.navigate(['/bookslot']);
  }

  func1()
  {
    this.router.navigate(['/report']);
  }
}
