import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './ui.component.html',
    styleUrls: ['./ui.component.scss']
})

export class UIComponent implements OnInit {
    activeLabel: string = null;
    constructor(){
    }
    ngOnInit() {
    }
}