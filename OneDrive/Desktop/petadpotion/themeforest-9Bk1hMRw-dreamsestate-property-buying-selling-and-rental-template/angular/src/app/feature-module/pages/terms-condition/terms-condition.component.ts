import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import * as AOS from 'aos';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.scss'
})
export class TermsConditionComponent implements OnInit {
  
  public routes = routes;
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
