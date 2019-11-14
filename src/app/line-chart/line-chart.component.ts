import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {BaseChartDirective, Color, Label} from 'ng2-charts';
import {WidgetComponent} from '../WidgetComponent';

@Component({
  selector: 'charts-line',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, WidgetComponent {

  @Input()
  inputData: LineChartData;
  @Input()
  useDefaultData = false;

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          // gridLines: {
          //   color: 'rgba(61,149,185,0.62)',
          // },
          // ticks: {
          //   fontColor: 'rgb(24,169,206,0.4)',
          // }
        }
      ]
    },
    annotation: {
      annotations: [],
    },
  };
  public lineChartType = 'line';
  public lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(2,111,208,0.2)',
      borderColor: 'rgba(2,111,208,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  constructor() {
  }

  ngOnInit() {
    if (this.useDefaultData) {
      this.inputData = {
        data: [
          {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
          {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
          {data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1'}
        ],
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      };
    }
  }
}

export interface LineChartData {
  data: ChartDataSets[];
  labels: Label[];
}
