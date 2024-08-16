import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/common/common.service';
import { DataService } from '../../../shared/data/data.service';
import { SidebarService } from '../../../shared/sidebar/sidebar.service';
import { routes } from '../../../shared/routes/routes';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header: any = [];

  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService,
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
    console.log("base", this.base);
    console.log("page", this.page);
    console.log("last", this.last);

    this.header = this.data.header;
  }
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const headerOne = document.querySelector('.header-fix');
    if (headerOne && scroll > 35) {
      headerOne.classList.add('nav-fixed');
    } else if (headerOne) {
      headerOne.classList.remove('nav-fixed');
    }
  }
  public searchPopup = false;
  private routerSubscription: Subscription | undefined;


  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.searchPopup = false; 
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe(); 
    }
  }

  showSearchPopup() {
    this.searchPopup = !this.searchPopup;
  }
  public navigate(){
    this.router.navigate([routes.rentPropertyGrid])
  }
}
