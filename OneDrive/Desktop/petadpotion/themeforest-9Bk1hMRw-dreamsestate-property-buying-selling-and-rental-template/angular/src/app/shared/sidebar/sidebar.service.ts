import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  public toggleSidebar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('mobileSidebar') || 'false'
  );

  public openSidebar(): void {
    if (localStorage.getItem('mobileSidebar')) {
      localStorage.removeItem('mobileSidebar');
      this.toggleSidebar.next('false');
    } else {
      localStorage.setItem('mobileSidebar', 'true');
      this.toggleSidebar.next('true');
    }
  }

  public closeSidebar(): void {
    this.toggleSidebar.next('false');
    localStorage.removeItem('mobileSidebar');
  }
}
