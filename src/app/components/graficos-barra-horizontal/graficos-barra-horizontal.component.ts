import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graficos-barra-horizontal',
  templateUrl: './graficos-barra-horizontal.component.html',
  styleUrls: ['./graficos-barra-horizontal.component.css']
})
export class GraficosBarraHorizontalComponent implements OnInit, OnDestroy {

  results: any[] = [
    {
      name: 'Juego 1',
      value: 20
    },
    {
      name: 'Juego 2',
      value: 50
    },
    {
      name: 'Juego 3',
      value: 10
    },
    {
      name: 'Juego 4',
      value: 35
    }
  ];
  //  Dimensiones de la grafica
  //  view: any[] = [700, 400];

  // options
  showXAxis       = true;
  showYAxis       = true;
  gradient        = true;
  showLegend      = true;
  showXAxisLabel  = true;
  xAxisLabel      = 'Juegos';
  showYAxisLabel  = true;
  yAxisLabel      = 'Votos';

  colorScheme = 'nightLights';

  //  creamos nuestra propiedad intervalo
  intervalo;

  constructor() {

    //  generar valores aleatorios para cambiar los valores de los resultados como prueba en tiempo real
    //  Al ejecutar un setInterval hay que tener cuidado  con las fugas de memoria, ya que el proceso seguira ejecutandose
    this.intervalo = setInterval(  () =>  {

      console.log('Tick');
      //  copiamos la data a un nuevo arreglo
      const newResults = [... this.results];
      //  Barremos la data del nuevo arreglo y otorgamos un valor aleatorio a cada elemento
      // tslint:disable-next-line: forin
      for ( let i in newResults ) {

        newResults[i].value = Math.round( Math.random() * 500 );
      }

      //  creamos un nuevo elemento para nuestros resultados con el operador spread
      //  Rompemos la relacion del paso de datos por referencia, haciendo que sea un arreglo nuevo de datos
      this.results = [...newResults];

    }, 1500 );

  }

  ngOnInit() {
  }

  ngOnDestroy() {

    //  limpiamos el intervalo para evitar fugas de memorias cuando el componente es destruido
    clearInterval( this.intervalo );
  }

  onSelect(event) {
    console.log(event);
  }

}
