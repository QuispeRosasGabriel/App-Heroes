import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number;
  // se le colcoa el nombre de lo que el padre escuchara
  // Al event emitter se le coloca el dato que se trabajara
  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private router: Router) {
    //Inicializando event emitter
    this.heroeSeleccionado = new EventEmitter()
  }

  ngOnInit() {
  }

  verHeroe() {
    // this.router.navigate(['/heroe', this.idx])
    this.heroeSeleccionado.emit(this.idx)
  }

}
