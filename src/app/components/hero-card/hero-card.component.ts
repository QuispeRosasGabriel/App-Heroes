import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() idx: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.idx])

  }

}
