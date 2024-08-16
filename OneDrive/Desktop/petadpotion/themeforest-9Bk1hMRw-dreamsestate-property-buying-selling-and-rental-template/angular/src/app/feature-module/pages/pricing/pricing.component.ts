import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import * as AOS from 'aos';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent implements OnInit{
  public routes = routes
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
