import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.modules';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { HeroTableComponent } from './components/hero-table/hero-table.component';
import { HeroService } from './services/hero.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroTableComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [provideHttpClient(), HeroService]
})
export class HeroesModule { }
