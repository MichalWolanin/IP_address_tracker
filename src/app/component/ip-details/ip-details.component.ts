import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../../models/information.interface';

@Component({
  selector: 'app-ip-details',
  templateUrl: './ip-details.component.html',
  styleUrls: ['./ip-details.component.scss'],
})
export class IPDetailsComponent implements OnInit {
  readonly apiUrl = environment.apiUrl;
  details?: Observable<ApiData[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.details = this.http.get<ApiData[]>(this.apiUrl);
  }
}
