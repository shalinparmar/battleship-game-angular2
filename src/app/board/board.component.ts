///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { Ship } from "../shared/ship";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-board',
  styleUrls: ['board.component.css'],
  templateUrl: 'board.component.html'
})
export class BoardComponent implements OnInit {

  @Input() ships: Array<Ship>;
  @Input() isDisableChanges: boolean;
  @Input() cellsOfShips: Array<number>;
  @Input() cellsOfShipsSimulation: Array<number>;

  @Output() private onCellClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() private onCellMouseOver: EventEmitter<number> = new EventEmitter<number>();
  @Output() private onCellMouseOut: EventEmitter<void> = new EventEmitter<void>();

  private rowsCollection: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80];
  private cellsCollection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
  private subscriber: any;

  constructor(private route: ActivatedRoute) {
    this.subscribeToResetPotentialShips();
  }

  ngOnInit(): void {

  }

  clickCell(id: number): void {
    // console.log('board - clickCell : ', id);

    if (this.isDisableChanges) {
      return;
    }

    this.onCellClicked.emit(id);
  }

  mouseOverCell(id: number): void {
    // console.log('board - mouseOverCell : ', id);

    if (this.isDisableChanges) {
      return;
    }

    this.onCellMouseOver.emit(id);
  }

  mouseOutCell(): void {
    // console.log('board - mouseOutCell: ', id);

    if (this.isDisableChanges) {
      return;
    }

    this.onCellMouseOut.emit();
  }

  isContainShip(id: number): boolean {
    return this.cellsOfShips.indexOf(id) > -1;
  }

  isContainShipSimulation(id: number): boolean {
    return this.cellsOfShipsSimulation.indexOf(id) > -1;
  }

  private subscribeToResetPotentialShips(): void {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];

        this.resetPotentialShips();
      }
    );
  }

  private resetPotentialShips(): void {
    this.onCellMouseOut.emit();
  }

  // ngOnDestroy() :void{
  //   this.subscriber.unsunscribe();
  // }
}
