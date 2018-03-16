import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
    get open(): number {
        return this._open;
    }

    set open(value: number) {
        this._open = Number(value);
    }

    private _open = 0;
    @Input() iconName: string;
    @Input() count: number;
    @Input() text: string;
    @Input() color: string;

    constructor() {
    }

    ngOnInit() {
    }
    switch(){
        this.open = this.open? 0: 1;
    }

}
