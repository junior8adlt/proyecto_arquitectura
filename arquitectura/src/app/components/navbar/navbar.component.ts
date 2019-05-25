import { Component, OnInit } from '@angular/core';


declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(window).on('scroll', function(){
    if ($(window).scrollTop()) {
      $('nav').addClass('purple');
    } else {
      $('nav').removeClass('purple');
    }
    });
  }

}
