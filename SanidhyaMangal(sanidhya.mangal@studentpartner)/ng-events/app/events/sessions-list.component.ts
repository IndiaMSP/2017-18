import { Component, OnInit, Input , OnChanges } from '@angular/core';
import { ISession } from './events.model';
import { VoterService } from './event-details/voters.service';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'sessions-list',
    templateUrl: 'app/events/sessions-list.component.html'
})

export class SessionsListComponent implements  OnChanges{
    @Input() sessions: ISession[]
    @Input() filterBy:string
    @Input() sortBy:string
    visibleSessions:ISession[] =[]
    constructor( private auth:AuthService, private voterService:VoterService ) { }
    ngOnChanges(){
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy==='name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDsc)
          }
        }
      
    filterSessions(filter) {
        if(filter === 'all') {
        this.visibleSessions = this.sessions.slice(0);
        } else {
        this.visibleSessions = this.sessions.filter(session => {
            return session.level.toLocaleLowerCase() === filter;
        })
        }
    }

    toggleVote(session:ISession){
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoters(session, this.auth.currentUser.userName);
          } else {
            this.voterService.addVoters(session, this.auth.currentUser.userName);
          }
        if (this.sortBy==='votes') {
            this.visibleSessions.sort(sortByVotesDsc);
        }
    }
    userHasVoted(session:ISession) {
       return this.voterService.userHasVoted(session,this.auth.currentUser.userName)
    }
}

function sortByNameAsc(s1:ISession, s2:ISession) {
    if (s1.name > s2.name) {
        return 1
    } else if(s1.name === s2.name){
        return 0
    }
    else return -1
}
function sortByVotesDsc(s1:ISession , s2:ISession) {
    return s2.voters.length - s1.voters.length 
}