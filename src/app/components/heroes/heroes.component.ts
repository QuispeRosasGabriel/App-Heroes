import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/models/heroe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  Heroes: Heroe[] = []

  constructor(private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.Heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx])
  }

}
