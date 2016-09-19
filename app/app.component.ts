import {Component,OnInit} from '@angular/core'
@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <my-heroes> Loading </my-heroes>
    `
})
export class AppComponent{
    title = 'Tour of Heroes';
}