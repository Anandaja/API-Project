import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import * as AOS from 'aos';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
  public routes = routes;
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
