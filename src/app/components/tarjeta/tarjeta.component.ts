import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {

  constructor() { }


@Input() categoria?: string;
@Input() titulo?: string;
@Input() subtitulo?: string;
@Input()  flex = false;
  ngOnInit(): void {
  }

}
