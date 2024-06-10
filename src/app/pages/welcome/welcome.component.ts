import { Component, OnInit } from '@angular/core';
import { StarwarsComponent } from "../../components/starworks/starwars.component";
import { RouterOutlet } from '@angular/router';


@Component ({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
    imports: [StarwarsComponent,RouterOutlet]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
