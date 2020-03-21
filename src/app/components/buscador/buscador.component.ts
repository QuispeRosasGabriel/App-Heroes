import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activatedRouter: ActivatedRoute,
    private _heroeService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroeService.buscarHeroes(params['termino']);
    })
  }

}
