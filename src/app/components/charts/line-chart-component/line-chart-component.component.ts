import { Component, Input, OnInit } from '@angular/core';
import { HistoricalValue } from '../../../shared/models/cryptocurrencyHistoricalValue.model';
import { ChartDataSets, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart-component',
  templateUrl: './line-chart-component.component.html',
  styleUrls: ['./line-chart-component.component.css']
})
export class LineChartComponentComponent implements OnInit {

  @Input() historicalValues: HistoricalValue[];
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(44,130,201,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line' ;

  constructor() {
    this.historicalValues = [];
    this.lineChartData = [];
    this.lineChartLabels = [];
  }

  ngOnInit(): void {
    const dataTab = [];
    const labels = [];
    for (const historicalValue of this.historicalValues) {
      dataTab.push(historicalValue.value);
      labels.push(historicalValue.time);
    }
    this.lineChartData = [
      {data: dataTab, label: 'Cryptocurrency Value'}
    ];
    this.lineChartLabels = labels;
  }

}
