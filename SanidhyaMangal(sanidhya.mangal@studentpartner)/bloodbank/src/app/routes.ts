import { RegisterModule } from './register/register.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DonorsComponent } from './donors/donors.component';
import { BanksComponent } from './banks/banks.component';
import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';


export const appRoutes:Routes =[
    { path: '', component: HomeComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'donors', component: DonorsComponent },
    { path: 'banks', component: BanksComponent },
    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: '**', pathMatch: 'full', component: NotFoundComponent },
]