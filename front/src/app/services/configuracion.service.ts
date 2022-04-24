import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TableDetail } from './IConfiguracion';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor(private http: HttpClient) { }


  getTableDetails() {
    return this.http.get<TableDetail[]>(`${environment.API}/tables/detail`)
  }

}
