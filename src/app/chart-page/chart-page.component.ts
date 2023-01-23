import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {ChartDateType} from "./chart.enum";

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ChartPageComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private readonly _locale: string,
  ) {
    Chart.register(...registerables);
    this._locale = 'ru';
    this._adapter.setLocale(this._locale);
  }

  public ChartDateType = ChartDateType;

  public range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public dateType = new FormControl('day');

  public get chartType() {
    return this.router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
