import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit{
  ngOnInit() {
    AOS.init({ disable: 'mobile', duration: 1200, once: true });
  }
}
