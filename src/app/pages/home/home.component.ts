import { Component } from '@angular/core';
import { DadosService } from '../../service/dados.service';
import { infos } from '../../interfaces/interface.home';
import { InfosComponent } from './components/infos/infos.component';

@Component({
  selector: 'app-home',
  imports: [InfosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  dados!: infos[];

  constructor(private dadosService: DadosService){
    this.dadosService.getDados().subscribe(res => {
      this.dados = res;
    })
  }
}
