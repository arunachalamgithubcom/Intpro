import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".tag-fillter").on("click",function(){
      $("#ressidebar").addClass("open");
      
    });
    $(".close-sidebar").on("click",function(){
      $("#ressidebar").removeClass("open");
      
    });
  }

}
