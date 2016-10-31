import { Component, OnInit } from '@angular/core';
import { Player } from "../../shared/player";
import { GameService } from "../../shared/game.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Ship } from "../../shared/ship";
import { PotentialShipComponent } from "../potential-ship/potential-ship.component";
import { ShipToLocate } from "../../shared/ship-to-locate";
import { ValidationResult } from "../../shared/validation-result";
import { CellInfo } from "../../shared/cell-info";
import { BoardService } from "../../shared/board.service";

@Component({
  selector: 'app-choose-locations',
  templateUrl: './choose-locations.component.html',
  styleUrls: ['./choose-locations.component.css']
})
export class ChooseLocationsComponent implements OnInit {
  cellsOfShips: Array<number>;//= new Array<number>();
  cellsOfShipsSimulation: Array<number> = new Array<number>();

  player: Player;
  isFirstPlayer: boolean;
  message: string = '';
  isVertical: boolean;

  isFinishedChoosing: boolean = false;

  private subscriber: any;

  currentShip: Ship = new Ship(new Array<number>());

  shipsLengthList: Array<number> = new Array<number>();
  ships: Array<Ship>;

  potentialCellIds: Array<number>;

  currentPotentialShip: PotentialShipComponent = new PotentialShipComponent();
  currentShipNumberOfCells: number;

  constructor(private gameService: GameService,
              private boardService: BoardService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setPlayerByRouteParams();

    this.setPotentialCellIds();

  }

  initDemoShips(): void {

    let shipToAdd: ShipToLocate;

    shipToAdd = new ShipToLocate(false, 4, 11);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(true, 4, 26);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(false, 5, 72);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(false, 3, 41);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(true, 3, 18);
    this.addShipToList(shipToAdd);
  }

  addShipToList(shipToLocate: ShipToLocate): void {
    let shipToAdd: Ship = new Ship(shipToLocate.locations);

    this.player.ships = [...this.player.ships, shipToAdd];

    shipToLocate.locations.forEach((id)=>this.player.cellsOfShips.push(id));
  }

  private addShipToSimulationList(shipToLocate: ShipToLocate): void {
    shipToLocate.locations.forEach((id)=>this.cellsOfShipsSimulation.push(id));
  }

  private clearSimulationList() {
    this.cellsOfShipsSimulation = new Array<number>();
  }

  private setPlayerByRouteParams(): void {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];

        this.isFirstPlayer = (id != 2);

        this.initPage();
      }
    );
  }

  private initPage(): void {
    // console.log('init page');

    this.resetVariables();

    this.setPlayerInfo();

    this.setPlayerShipsByService();

    this.verifyNotAlreadyChosen();

    this.initShipsLengthList();

    this.getNextShip();
  }

  private resetVariables(): void {
    this.message = '';
    this.isVertical = false;

    this.isFinishedChoosing = false;

    this.currentShip = new Ship(new Array<number>());

    this.shipsLengthList = new Array<number>();

    this.currentPotentialShip = new PotentialShipComponent();
    this.currentShipNumberOfCells = 0;
  }

  initShipsLengthList(): void {
    //todo: get from config
    this.shipsLengthList = [2, 3, 3, 4, 5]
  }

  switchDirection(): void {
    this.isVertical = !this.isVertical;
  }

  setSelectedShip(numberOfCells: number): void {
    this.currentShipNumberOfCells = numberOfCells;
    this.resetSettings();
  }

  private resetSettings(): void {
    this.isVertical = false;
    this.currentShip = null;
    this.currentPotentialShip = null;
  }

  clickCell(id): void {

    this.resetMessage();

    // console.log('you clicked on ', id);

    let shipToLocate: ShipToLocate =
      new ShipToLocate(this.isVertical, this.currentShipNumberOfCells, id);

    let validationResult: ValidationResult = this.isValidLocationForShip(shipToLocate);

    if (validationResult.isValid) {
      this.addShipToList(shipToLocate);

      this.getNextShip();
    }
    else {
      this.displayValidationMessage(validationResult.message);
    }
  }

  mouseOverCell(id: number): void {
    let shipToLocate: ShipToLocate =
      new ShipToLocate(this.isVertical, this.currentShipNumberOfCells, id);

    let validationResult: ValidationResult = this.isValidLocationForShip(shipToLocate);

    if (validationResult.isValid) {
      this.addShipToSimulationList(shipToLocate);
    }
  }

  mouseOutCell(): void {
    this.clearSimulationList();
  }

  getNextShip(): void {
    let numberOfCells: number = this.shipsLengthList.shift();

    if (numberOfCells) {
      this.setSelectedShip(numberOfCells);
    }
    else {

      this.isFinishedChoosing = true;
      /*
       console.log('player 1 ships');
       console.table(this.gameService.player1.ships);

       console.log('player 2 ships');
       console.table(this.gameService.player2.ships);
       */
    }
  }

  private displayValidationMessage(message: string): void {
    this.message = message;
  }

  setPlayerInfo(): void {
    if (this.isFirstPlayer) {
      this.player = this.gameService.player1;
    }
    else {
      this.player = this.gameService.player2;
    }

    this.player.ships = new Array<Ship>();
  }

  setPlayerShipsByService(): void {
    this.ships = this.player.ships;
    this.cellsOfShips = this.player.cellsOfShips;
  }

  private continueToNextStep(): void {

    // console.log('next step');

    if (this.isFirstPlayer) {
      this.router.navigate(['choose-location/2']);
    }
    else {
      this.router.navigate(['start-game']);
    }
  }

  private isValidLocationForShip(shipToLocate: ShipToLocate): ValidationResult {
    if (!this.isShipInValidCells(shipToLocate.locations)) {
      return new ValidationResult(false, 'המיקום לא חוקי');
    }

    if (this.isShipInOtherShipAlreadyCells(shipToLocate.locations)) {
      return new ValidationResult(false, 'המיקום בשימוש על ידי צוללת אחרת');
    }

    return new ValidationResult(true, '');
  }

  private resetMessage(): void {
    this.message = '';
  }

  private verifyNotAlreadyChosen(): void {
    if (this.cellsOfShips.length > 0) {
      //already chosen - prevent use back to see
      this.continueToNextStep();
    }
  }

  private setPotentialCellIds(): void {
    this.potentialCellIds = this.boardService.getBoardCells();
  }

  private isShipInValidCells(locations: Array<number>): boolean {
    let notValidCells: Array<number> =
      locations.filter((id) =>this.potentialCellIds.indexOf(id) == -1);

    return notValidCells.length == 0;
  }

  private isShipInOtherShipAlreadyCells(locations: Array<number>): boolean {

    let cells: Array <CellInfo>;
    let isFoundShipInCells: boolean = false;
    // console.log('locations', locations);
    // console.log('this.ships', this.ships);
    // debugger;
    locations.forEach((id)=> {
      this.player.ships.forEach((ship)=> {
        cells = ship.cells.filter((cell)=>cell.id == id);
        if (cells.length > 0) {
          // console.log('isShipInOtherShipAlreadyCells', true);
          //return true;
          isFoundShipInCells = true;
        }
      });
    });
    // console.log('isShipInOtherShipAlreadyCells', false);

    return isFoundShipInCells;
  }


}
