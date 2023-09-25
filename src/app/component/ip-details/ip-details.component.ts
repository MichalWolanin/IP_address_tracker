import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ApiData } from '../../models/information.interface';

@Component({
  selector: 'app-ip-details',
  templateUrl: './ip-details.component.html',
  styleUrls: ['./ip-details.component.scss'],
})
export class IPDetailsComponent implements OnInit {
  ipAddress = '';
  public apiData: ApiData | undefined;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getDataFromIpAddress();
  }

  getDataFromIpAddress(): void {
    this.dataService.getData(this.ipAddress).subscribe(data => {
      this.apiData = data;
    });
  }
}
