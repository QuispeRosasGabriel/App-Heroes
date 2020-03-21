import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) {
    //Obtener parametros del link que viene
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);

    })
  }

  ngOnInit() {
  }

}
