import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
   return this._http.get<Menu[]>('./assets/data/menu.json')
  }
}
