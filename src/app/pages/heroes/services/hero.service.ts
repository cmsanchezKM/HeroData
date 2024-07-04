import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, ObservableInput, of, throwError } from 'rxjs';
import { Hero } from '../model/hero.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class HeroService {
  private apiUrl = environment.apiUrl;
  private heroUrl = `${this.apiUrl}/heroes`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.heroUrl}`)
      .pipe(catchError((error: any) => this.handleError(error, "getHeroes")));
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroUrl}/${id}`)
    .pipe(catchError((error: any) => this.handleError(error, "getHero")));
  }

  setHero(id: string, hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.heroUrl}/${id}`, hero)
    .pipe(catchError((error: any) => this.handleError(error, "setHero")));
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<Hero>(`${this.heroUrl}/${id}`)
    .pipe(catchError((error: any) => this.handleError(error, "deleteHero")));;
  }

  private handleError(error: any, operation = 'operation'): Observable<any>{
    this.snackBar.open(`${operation} error: ${error.message}`, `Cerrar`);
    return throwError(() => new Error(error));
  }
}
