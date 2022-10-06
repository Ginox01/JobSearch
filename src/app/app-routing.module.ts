import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [HomepageComponent, NotFoundComponent],
  imports: [RouterModule.forRoot(routes), FontAwesomeModule, CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
