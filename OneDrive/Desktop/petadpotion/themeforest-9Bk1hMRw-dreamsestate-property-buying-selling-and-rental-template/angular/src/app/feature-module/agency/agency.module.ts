import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyListSidebarComponent } from './agency-list-sidebar/agency-list-sidebar.component';
import { AgencyGridComponent } from './agency-grid/agency-grid.component';
import { AgencyGridSidebarComponent } from './agency-grid-sidebar/agency-grid-sidebar.component';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AgencyComponent,
    AgencyListComponent,
    AgencyListSidebarComponent,
    AgencyGridComponent,
    AgencyGridSidebarComponent,
    AgencyDetailsComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    SharedModule
  ]
})
export class AgencyModule { }
