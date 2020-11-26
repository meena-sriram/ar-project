import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayArComponent } from './play-ar/play-ar.component';

@NgModule({
   imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'ar', component: PlayArComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: []

})
export class AppRoutingModule {}

