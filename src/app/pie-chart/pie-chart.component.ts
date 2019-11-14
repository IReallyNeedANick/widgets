import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {WidgetComponent} from '../WidgetComponent';
import {Label} from "ng2-charts";

@Component({
  selector: 'charts-pie',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, WidgetComponent {

  @Input()
  inputData: PieChartData;
  @Input()
  useDefaultData = false;

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';

  constructor() {
  }

  ngOnInit() {
    if (this.useDefaultData) {
      this.inputData = {
        data: [300, 500, 100],
        labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales']
      }
    }
  }
}


interface PieChartData {
  labels: Label[];
  data: number[];
}
