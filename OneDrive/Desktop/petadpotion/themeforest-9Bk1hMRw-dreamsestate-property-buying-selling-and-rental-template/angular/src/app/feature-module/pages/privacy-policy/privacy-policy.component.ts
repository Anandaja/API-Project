import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import * as AOS from 'aos';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit{
  public routes = routes
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
