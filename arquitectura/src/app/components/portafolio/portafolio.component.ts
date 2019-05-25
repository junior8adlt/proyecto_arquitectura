import { Component, OnInit } from '@angular/core';



declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.button').click(function(){
    var value = $(this).attr('data-filter');
    if (value === 'all') {
      $('.filter').show(1000);
      $('.todo').addClass('active');
      $('.puente').removeClass('active');
      $('.estadio').removeClass('active');
      $('.centro').removeClass('active');
      $('.hotel').removeClass('active');
    } else {
      $('.filter').not('.' + value).hide('1000');
      $('.filter').filter('.' + value).show('1000');
      console.log(value);
      if (value === 'puentes') {
        $('.puente').addClass('active');
        $('.todo').removeClass('active');
        $('.estadio').removeClass('active');
        $('.centro').removeClass('active');
        $('.hotel').removeClass('active');
      }

      if (value === 'hoteles') {
        $('.hotel').addClass('active');
        $('.todo').removeClass('active');
        $('.estadio').removeClass('active');
        $('.centro').removeClass('active');
        $('.puente').removeClass('active');
      }

      if (value === 'estadios') {
        $('.estadio').addClass('active');
        $('.todo').removeClass('active');
        $('.puente').removeClass('active');
        $('.centro').removeClass('active');
        $('.hotel').removeClass('active');
      }
      if (value === 'centroscomerciales') {
        $('.centro').addClass('active');
        $('.todo').removeClass('active');
        $('.estadio').removeClass('active');
        $('.puente').removeClass('active');
        $('.hotel').removeClass('active');
      }
    }
    });
  }

}
