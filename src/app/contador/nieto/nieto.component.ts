import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../contador.actions';
import { AppState } from '../../app.reducers';


@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit{

  contador?: number;
  constructor( private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
    this.store.select('contador')
          .subscribe( contador => this.contador = contador);   
  }

  reset() {
    this.store.dispatch( actions.reset() );
    
  }
}
