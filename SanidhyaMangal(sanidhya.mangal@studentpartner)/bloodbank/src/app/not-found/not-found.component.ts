import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  route_path = this.router.url;
  router_url  = "https://url"+this.route_path

  ngOnInit() {
    if(this.route_path === "/**"){
      this.router_url=null;
    }

    if(this.route_path === "/cantpost"){
      this.router_url = "cantpost";
    }
  }

}
