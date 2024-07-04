import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.modules';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { HeroTableComponent } from './components/hero-table/hero-table.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroTableComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class HeroesModule { }
