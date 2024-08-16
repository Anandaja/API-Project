import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import * as AOS from 'aos';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent implements OnInit{
  public routes = routes
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
