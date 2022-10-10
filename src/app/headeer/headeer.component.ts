import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-headeer',
  templateUrl: './headeer.component.html',
  styleUrls: ['./headeer.component.css']
})
export class HeadeerComponent implements OnInit {
  

  constructor(
  
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
  
  
  }

}
