import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetero',
  templateUrl: './tarjetero.component.html',
  styleUrls: ['./tarjetero.component.scss']
})
export class TarjeteroComponent implements OnInit {

  constructor() { }

    categoria = 'hoteles';

    titulo = 'el titulo descriptivo';

    flex = true;

  ngOnInit(): void {
  }

}
