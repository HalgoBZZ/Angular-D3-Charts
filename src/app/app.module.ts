import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { D3ScaleComponent } from './components/d3-scale/d3-scale.component';
import { routing } from './routing.module';
import { NvD3Module } from 'ngx-nvd3';
import 'd3';
import { D3DonutChartComponent } from './components/d3-donut-chart/d3-donut-chart.component';
import { D3LineChartComponent } from './components/d3-line-chart/d3-line-chart.component';
import { D3CumulativeLineChartComponent } from './components/d3-cumulative-line-chart/d3-cumulative-line-chart.component';
import { D3StackedAreaChartComponent } from './components/d3-stacked-area-chart/d3-stacked-area-chart.component';
import { D3MultibarChartComponent } from './components/d3-multibar-chart/d3-multibar-chart.component';
import { D3DiscreteBarChartComponent } from './components/d3-discrete-bar-chart/d3-discrete-bar-chart.component';
import { D3HistoricalBarChartComponent } from './components/d3-historical-bar-chart/d3-historical-bar-chart.component';
import { D3MultiBarHorizontalChartComponent } from './components/d3-multi-bar-horizontal-chart/d3-multi-bar-horizontal-chart.component';
import { D3PieChartComponent } from './components/d3-pie-chart/d3-pie-chart.component';
import { D3ScatterChartComponent } from './components/d3-scatter-chart/d3-scatter-chart.component';
import { D3LineWithFocusChartComponent } from './components/d3-line-with-focus-chart/d3-line-with-focus-chart.component';
import { D3ScatterLineChartComponent } from './components/d3-scatter-line-chart/d3-scatter-line-chart.component';
import { D3LineBarWithFocusComponent } from './components/d3-line-bar-with-focus/d3-line-bar-with-focus.component';
import { D3BulletComponent } from './components/d3-bullet/d3-bullet.component';
import { D3SparkLineComponent } from './components/d3-spark-line/d3-spark-line.component';
import { D3ParallelCoordinatesComponent } from './components/d3-parallel-coordinates/d3-parallel-coordinates.component';
import { D3MultiCahrtComponent } from './components/d3-multi-cahrt/d3-multi-cahrt.component';
import { D3CandlestickChartComponent } from './components/d3-candlestick-chart/d3-candlestick-chart.component';
import { D3SunburstChartComponent } from './components/d3-sunburst-chart/d3-sunburst-chart.component';
import { D3OhlcChartComponent } from './components/d3-ohlc-chart/d3-ohlc-chart.component';
import { D3BoxPlotChartComponent } from './components/d3-box-plot-chart/d3-box-plot-chart.component';
import { D3ForceDirectedGraphComponent } from './components/d3-force-directed-graph/d3-force-directed-graph.component';
// import 'nvd3';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    D3ScaleComponent,
    D3DonutChartComponent,
    D3LineChartComponent,
    D3CumulativeLineChartComponent,
    D3StackedAreaChartComponent,
    D3MultibarChartComponent,
    D3DiscreteBarChartComponent,
    D3HistoricalBarChartComponent,
    D3MultiBarHorizontalChartComponent,
    D3PieChartComponent,
    D3ScatterChartComponent,
    D3LineWithFocusChartComponent,
    D3ScatterLineChartComponent,
    D3LineBarWithFocusComponent,
    D3BulletComponent,
    D3SparkLineComponent,
    D3ParallelCoordinatesComponent,
    D3MultiCahrtComponent,
    D3CandlestickChartComponent,
    D3SunburstChartComponent,
    D3OhlcChartComponent,
    D3BoxPlotChartComponent,
    D3ForceDirectedGraphComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NvD3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
