import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  Event as RouterEvent,
} from '@angular/router';
import { CommonService } from '../shared/common/common.service';
import { SidebarService } from '../shared/sidebar/sidebar.service';
import { BehaviorSubject } from 'rxjs';
interface url {
  url: string;
}
@Component({
  selector: 'app-feature-module',
  templateUrl: './feature-module.component.html',
  styleUrl: './feature-module.component.scss',
})
export class FeatureModuleComponent implements OnInit {
  public mobileSidebar = false;
  base = '';
  page = '';
  last = '';
  public strokeValue = 0;
  public progress = 0;
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();
  constructor(
    private common: CommonService,
    private router: Router,
    private sidebar: SidebarService
  ) {
    {
      this.common.base.subscribe((res: string) => {
        this.base = res;
      });
      this.common.page.subscribe((res: string) => {
        this.page = res;
      });
      this.common.last.subscribe((res: string) => {
        this.last = res;
      });
    }
    router.events.subscribe((events: object) => {
      if (events instanceof NavigationStart) {
        this.getRoutes(events);
        this.mobileSidebar = false;
        localStorage.removeItem('mobileSidebar');
      }
    });
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
        this.showLoader();
      }
      if (event instanceof NavigationEnd) {
        this.hideLoader();
        this.mobileSidebar = false;
      }
    });
    this.sidebar.toggleSidebar.subscribe((res: string) => {
      if (res == 'true') {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    this.getRoutes(this.router);
  }
  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
  }

  ngOnInit(): void {
    this.calculateScrollPercentage();
  }

  // scroll the page to top position
  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // function to calculate the scroll progress
  private calculateScrollPercentage(): void {
    window.addEventListener('scroll', () => {
      const body = document.body,
        html = document.documentElement;
      //gets the total height of page till scroll
      const totalheight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      // calculates the total stroke value
      this.progress = totalheight;
      const currentDistance = window.scrollY / (totalheight / 3000);
      // calculates the current stroke value
      this.strokeValue = totalheight - currentDistance / 8;
      // condition to hide scroll progress if page in top
      if (window.scrollY == 0) {
        this.strokeValue = totalheight;
      }
      // condition to make scroll progress to 100 if page in bottom
      if (window.innerHeight + window.scrollY >= totalheight) {
        this.strokeValue = 0;
      }
    });
  }
  showLoader() {
    this._loading.next(true);
  }

  hideLoader() {
    setTimeout(() => {
      this._loading.next(false);
      window.scrollTo(0, 0);
    }, 1200);
  }
}
