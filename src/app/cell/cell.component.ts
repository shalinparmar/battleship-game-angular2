import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  template: `
    <td>
      cell 
    </td>
  `,
  styles: []
})
export class CellComponent implements OnInit {


  id: number;

  isContainBattleship: boolean;
  isClickable: boolean;
  isExposed: boolean;

  constructor() { }

  ngOnInit() {
  }

}
