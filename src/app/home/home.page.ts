import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmesService } from '../services/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private filmesService: FilmesService) {

  }
  SetOpcao1(){
    this.router.navigate(['/opcao1'])
  }
  async ngOnInit(){
    this.filmesService.getProductions();
  }
}
