import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { EventService  } from '../events/events.service';
import { ISession } from '../events/events.model';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li>a.active{color:#f97924;}
  `]
})
export class NavBarComponent {
  searchTerm:string=""
  foundSessions:ISession[] = []
  constructor(private authService:AuthService, private eventService:EventService){}

  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
      session=>{
        this.foundSessions = session;
      })
  }

}