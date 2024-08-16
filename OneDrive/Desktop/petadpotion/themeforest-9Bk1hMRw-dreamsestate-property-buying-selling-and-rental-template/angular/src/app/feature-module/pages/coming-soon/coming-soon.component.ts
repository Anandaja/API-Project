import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { CommonService } from '../../../shared/common/common.service';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss'
})
export class ComingSoonComponent implements OnDestroy {
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
    if(this.page == 'coming-soon') {
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
