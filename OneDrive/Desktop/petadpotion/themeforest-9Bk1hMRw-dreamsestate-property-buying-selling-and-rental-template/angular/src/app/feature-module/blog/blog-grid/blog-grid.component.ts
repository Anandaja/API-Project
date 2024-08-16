import { Component, OnInit } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.scss'
})
export class BlogGridComponent implements OnInit {
  public routes = routes;
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
