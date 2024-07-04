import { Component, Input } from '@angular/core';
import { Hero } from '../../model/hero.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrl: './hero-table.component.scss'
})
export class HeroTableComponent {
  @Input() heroes: Hero[] = [];

  displayedColumns: string[] = ['name', 'actions',];
  dataSource = new MatTableDataSource<Hero>();

  editHero(element: Hero) {
    console.log('editHero', element);
  }
  deleteHero(element: Hero) {
    console.log('deleteHero', element);
  }
}
