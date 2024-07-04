import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../model/hero.interface';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrl: './hero-table.component.scss'
})
export class HeroTableComponent {
  @Input() heroes!: Hero[];

  displayedColumns: string[] = ['name', 'edit', 'delete'];
}
