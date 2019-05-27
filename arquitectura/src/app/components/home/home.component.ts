import { Component, OnInit } from '@angular/core';

declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
     $('.main').removeClass('d-none');
     $('.preload').addClass('preload-finish');
    }
    , 5000);
  }

  navigate(section: string){
    window.location.hash = '';
    window.location.hash = section;
  }

}
