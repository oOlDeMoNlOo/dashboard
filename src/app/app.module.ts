import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { InfoCardComponent } from './info-card/info-card.component';
import {MatCardModule, MatDividerModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        InfoCardComponent
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
