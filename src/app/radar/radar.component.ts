import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'charts-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.scss']
})
export class RadarComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  @Input()
  inputData: RadarData;
  @Input()
  useDefaultData = false;

  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
    if (this.useDefaultData == true) {
      this.inputData = {
        data:[
          { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
          { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ],
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running']
      }
    }
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

interface RadarData {
  data: ChartDataSets[];
  labels: Label[];
}
