import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ApiData } from '../../models/information.interface';

@Component({
  selector: 'app-ip-details',
  templateUrl: './ip-details.component.html',
  styleUrls: ['./ip-details.component.scss'],
})
export class IPDetailsComponent implements OnInit {
  public apiData: ApiData | undefined;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getDataForIpAddress('192.168.100.5');
  }

  getDataForIpAddress(ipAddress: string): void {
    this.dataService.getData(ipAddress).subscribe(data => {
      this.apiData = data;
      console.log(this.apiData);
    });
  }
}
