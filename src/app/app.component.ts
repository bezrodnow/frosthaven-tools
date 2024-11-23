import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {ToolbarComponent} from "./base-component/toolbar/toolbar.component";
import {ToolbarService} from "./services/toolbar.service";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(
    public toolbarService: ToolbarService,
    private primengConfig: PrimeNGConfig
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
