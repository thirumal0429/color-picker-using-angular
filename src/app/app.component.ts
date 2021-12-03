import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public disabled = false;
  public color: ThemePalette = 'primary';
  public touchUi = false;

  colorCtr: AbstractControl = new FormControl(null);

  constructor() {}

  ngOnInit() {}
}
