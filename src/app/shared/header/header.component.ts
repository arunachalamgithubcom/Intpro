import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".hamburger-icon").on("click",function(){
      $(".jas-mb-style").css({"transform": "translateX(100%)"});
   
      $(".close-menu-mb").addClass("menu-open");
      
    });
    $(".close-menu-mb").on("click",function(){
      $(".jas-mb-style").css({"transform": "translateX(0%)"});
   
      $(".close-menu-mb").removeClass("menu-open");
      
    });
    $(".icon-dropdown").on("click",function(){
      $(".icon-dropdown").parent().next().addClass("sub-menu-open");
    });
  }

}
