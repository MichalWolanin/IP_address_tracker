import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiData } from '../models/information.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getData(ipAddress: string): Observable<ApiData> {
    const url = `${this.apiUrl}&ipAddress=${ipAddress}`;
    return this.http.get<ApiData>(url).pipe();
  }
}
