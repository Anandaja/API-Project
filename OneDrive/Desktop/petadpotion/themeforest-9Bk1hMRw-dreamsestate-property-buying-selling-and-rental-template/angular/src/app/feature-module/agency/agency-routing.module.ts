import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyListSidebarComponent } from './agency-list-sidebar/agency-list-sidebar.component';
import { AgencyGridComponent } from './agency-grid/agency-grid.component';
import { AgencyGridSidebarComponent } from './agency-grid-sidebar/agency-grid-sidebar.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    children: [
      { path: 'agency-list', component: AgencyListComponent },
      { path: 'agency-list-sidebar', component: AgencyListSidebarComponent },
      { path: 'agency-grid', component: AgencyGridComponent },
      { path: 'agency-grid-sidebar', component: AgencyGridSidebarComponent },
      { path: 'agency-details', component: AgencyDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}
