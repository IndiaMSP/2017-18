import { Injectable } from '@angular/core';
import { ISession } from '../events.model';

@Injectable()
export class VoterService {

    deleteVoters(session:ISession , voterName:string){
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    addVoters(session:ISession , voterName:string){
        session.voters.push(voterName)
    }

    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
    constructor() { }
}