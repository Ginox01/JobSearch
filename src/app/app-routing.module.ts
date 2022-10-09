import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

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
    path: 'home/job/:id',
    component: DetailPageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [HomepageComponent, NotFoundComponent, DetailPageComponent],
  imports: [
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
