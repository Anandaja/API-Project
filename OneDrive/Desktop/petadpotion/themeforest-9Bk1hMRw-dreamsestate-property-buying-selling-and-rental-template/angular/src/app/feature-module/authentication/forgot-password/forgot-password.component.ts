import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { CommonService } from '../../../shared/common/common.service';
import { routes } from '../../../shared/routes/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnDestroy {
  public routes = routes;
  base = '';
  page = '';
  last = '';

  constructor(
    private common: CommonService,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    if(this.base == 'forgot-password') {
      this.renderer.addClass(document.body, 'login-body');
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login-body');
  }
  public navigate(){
    this.router.navigate([routes.rentPropertyGrid])
  }
}
