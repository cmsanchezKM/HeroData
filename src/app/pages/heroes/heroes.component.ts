import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from './model/hero.interface';
import { Observable } from 'rxjs/internal/Observable';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes$: any;
  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }
}
