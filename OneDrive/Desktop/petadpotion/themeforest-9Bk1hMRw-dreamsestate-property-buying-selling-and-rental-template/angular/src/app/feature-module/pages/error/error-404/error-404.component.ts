import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { CommonService } from '../../../../shared/common/common.service';
import { routes } from '../../../../shared/routes/routes';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component implements OnDestroy {
  base = '';
  page = '';
  last = '';
  public routes = routes;
  constructor(
    private common: CommonService,
    private renderer: Renderer2
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
    if(this.page == 'error-404') {
      this.renderer.addClass(document.body, 'error-page');
      this.renderer.addClass(document.body, 'login-body');
      this.renderer.addClass(document.body, 'p-0');
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'error-page');
    this.renderer.removeClass(document.body, 'login-body');
    this.renderer.removeClass(document.body, 'p-0');
  }
}
