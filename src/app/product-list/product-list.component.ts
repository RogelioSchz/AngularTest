import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {name: "producto 1", description: "Descr", price: 700}, 
    {name: "producto 2", description: "Descr", price: 800}, 
    {name: "producto 3", description: "", price: 900}];

  share(){
    console.log("share");
  }
  onNotify(){
    console.log("notify");
  }
  constructor() { }

  ngOnInit() {
  }

}
