import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {GrowlModule} from 'primeng/components/growl/growl';
import {MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfoCardComponent} from './info-card/info-card.component';
import {RoutingDashboardModule} from './routing-dashboard.module';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        ChartModule,
        GrowlModule,
        RoutingDashboardModule,
        DataViewModule,
        MatInputModule,
        MatFormFieldModule
    ],
    declarations: [DashboardComponent, InfoCardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule {
}
