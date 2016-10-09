import { Component, OnInit, Input } from '@angular/core';
import { Ship } from '../shared/ship';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-cell',
  template: `

    <td [ngClass]="getCellClass()" style="width: 100%; text-align: center; ">
       
 <span class="circle">{{id}}</span>      
     </td>
  `,
  styles: [`
    .contains-ship{
      background-color:green ;
  }
  
  
.circle {
	width: 240px;
	height: 240px;
	background: #51fff8;
	-moz-border-radius: 120px;
	-webkit-border-radius: 120px;
	border-radius: 120px;
}
  
  
`
  ]
})
export class CellComponent implements OnInit {

  @Input() id: number;
  @Input() ships: Array<Ship>;

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
        console.log('xxx');
        return;
      }

    });

  }


  getCellClass() {
    return {
      'contains-ship': this.isContainBattleship
    };
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
