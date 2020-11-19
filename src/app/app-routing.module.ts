import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArComponent} from './ar/ar.component';
import { EntryComponent } from './entry/entry.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ar', component: ArComponent },
  { path: 'entry', component: EntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
