import {Component} from '@angular/core';
import {Hero} from './hero' ;
import {HeroService} from './hero.service';
import {Router} from '@angular/router';
@Component({
    selector: 'my-dashboard',
    //template:'<h3>My Dashboard </h3>'
    templateUrl:'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent {
    heroes: Hero[]=[];
    constructor(
        private router: Router,
        private heroService:HeroService){}
    ngOnInit(): void{
        this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
    }
    gotoDetail(hero:Hero): void{/*not implemented yet*/
        let link = ['/detail',hero.id];
        this.router.navigate(link);    
     }
 }