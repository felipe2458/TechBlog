import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { infos } from '../interfaces/interface.home';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  constructor(private http: HttpClient) { }

  getDados(): Observable<infos[]>{
    return this.http.get<infos[]>('/assets/json/dados.json');
  }
}
