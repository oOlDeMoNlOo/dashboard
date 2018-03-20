import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { InfoCardComponent } from './dashboard/info-card/info-card.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {DashboardService} from './dashboard/dashboard.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DashboardModule,
        RouterModule.forRoot([{
            path: '', redirectTo: 'dashboard', pathMatch: 'full'
        }])
    ],
    providers: [DashboardService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
