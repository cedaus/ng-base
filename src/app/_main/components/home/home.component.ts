import {Component, OnInit} from '@angular/core';
import { RouterService } from 'src/app/_core/services/router.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    features = [
        {svg: `<svg xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 373.232 373.232" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M187.466,0c-0.1,0.1-0.3,0.1-0.6,0.1c-101.2,0-183.5,82.3-183.5,183.5c0,41.3,14.1,81.4,39.9,113.7l-26.7,62 c-2.2,5.1,0.2,11,5.2,13.1c1.8,0.8,3.8,1,5.7,0.7l97.9-17.2c19.6,7.1,40.2,10.7,61,10.6c101.2,0,183.5-82.3,183.5-183.5 C370.066,82.1,288.366,0.1,187.466,0z M186.466,346.6c-19.3,0-38.4-3.5-56.5-10.3c-1.7-0.7-3.5-0.8-5.3-0.5l-82.4,14.4l21.8-50.7 c1.5-3.5,0.9-7.6-1.6-10.5c-11.8-13.7-21.2-29.3-27.8-46.2c-7.4-18.9-11.2-39-11.2-59.3c0-90.2,73.4-163.5,163.5-163.5 c89.9-0.2,162.9,72.5,163,162.4c0,0.2,0,0.4,0,0.6C349.966,273.3,276.566,346.6,186.466,346.6z" fill="#333333" data-original="#000000" style=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M178.666,146.7h-54c-5.5,0-10,4.5-10,10s4.5,10,10,10h54c5.5,0,10-4.5,10-10S184.166,146.7,178.666,146.7z" fill="#333333" data-original="#000000" style=""/></g></g><g xmlns="http://www.w3.org/2000/svg"><g><path d="M248.666,196.7h-124c-5.5,0-10,4.5-10,10s4.5,10,10,10h124c5.5,0,10-4.5,10-10S254.166,196.7,248.666,196.7z" fill="#333333" data-original="#000000" style=""/></g></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g><g xmlns="http://www.w3.org/2000/svg"></g></g></svg>`, title: 'Chat', route: 'chat'},
        {svg: '', title: 'Contacts', route: 'contact'},
        {svg: '', title: 'Calendar', route: 'calendar'},
        {svg: ``, title: 'Ecommerce', route: 'ecommerce'},
        {svg: '', title: 'Social', route: 'social'},
        {svg: '', title: 'File Box', route: 'file'},
        {svg: '', title: 'Chart', route: 'chart'},
        {svg: '', title: 'Stream', route: 'stream'},];
    constructor(private router$:RouterService){
    }
    ngOnInit() {
    }
    goTo(route){
        this.router$.goto(route)
    }
}