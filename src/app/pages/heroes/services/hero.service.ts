import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero.interface';

@Injectable()
export class HeroService {
  private apiUrl = environment.apiUrl;
  private heroUrl = `${this.apiUrl}/heroes`;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(`${this.heroUrl}`);
  }

  getHero(id: string): Observable<Hero>{
    return this.http.get<Hero>(`${this.heroUrl}/${id}`);
  }

  setHero(id:string, hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.heroUrl}/${id}`, hero);
  }

  deleteHero(id: string): Observable<any>{
    return this.http.delete<Hero>(`${this.heroUrl}/${id}`);
  }
}
