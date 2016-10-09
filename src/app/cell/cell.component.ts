import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import { Ship } from '../shared/ship';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-cell',
  template: `

    <td [ngClass]="getCellClass()"  >
       
      <span class="circle" (click)="clickCell()">{{id}}</span>      
     </td>
  `,
  styles: [`
    .contains-ship{ 
      background-color:green ;
  }
  
  td {
  width: 55px;
  height: 55px;
}

.circle {
  display: inline-block;
  text-align: center;
  line-height: 50px;/*vertical-align: middle;*/
  margin: 2px;
  
	width: 50px;
	height: 50px;
	background: #51fff8;
	-moz-border-radius: 25px;
	-webkit-border-radius: 25px;
	border-radius: 25px;
	
	cursor: pointer;
}
  
  
`
  ]
})
export class CellComponent implements OnInit {

  @Input() id: number;
  @Input() ships: Array<Ship>;
  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();


  isContainBattleship: boolean = false;
  isClickable: boolean;
  isExposed: boolean;

  constructor() {
  }

  ngOnInit() {
    this.checkIsContainBattleship();
  }


  checkIsContainBattleship() {

    this.ships.forEach((ship) => {
      if (ship.locations.indexOf(this.id) > -1) {
        this.isContainBattleship = true;
        console.log('isContainBattleship : true - ', this.id);
        return;
      }

    });

  }


  getCellClass() {
    return {
      'contains-ship': this.isContainBattleship
    };
  }


  clickCell() {
    console.log('clickCell');
    this.onCellClicked.emit(this.id);
  }

  /*
   */
  // forEach(let ship in this.ships)
  // {
  //   if(ship.locations.indexOf(this.id)>-1){
  //     this.isContainBattleship=true;
  //     return;
  //   }
  // }


}
