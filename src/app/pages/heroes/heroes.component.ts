import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from './model/hero.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HeroService } from './services/hero.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService){
    this.heroes$ = of([] as Hero[]);
  }

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
