import { Component, OnInit } from '@angular/core';
import { Player } from "../../shared/player";
import { GameService } from "../../shared/game.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Ship } from "../../shared/ship";
import { PotentialShipComponent } from "../potential-ship/potential-ship.component";
import { ShipToLocate } from "../../shared/ship-to-locate";
import { ValidationResult } from "../../shared/validation-result";

@Component({
  selector: 'app-choose-locations',
  templateUrl: './choose-locations.component.html',
  styleUrls: ['./choose-locations.component.css']
})
export class ChooseLocationsComponent implements OnInit {
  player: Player;
  isFirstPlayer: boolean;
  message: string = '';
  isVertical: boolean;
  private subscriber: any;
cellsOfShips:Array<number>=new Array<number>();

  currentShip: Ship = new Ship(new Array<number>());
  currentPotentialShip: PotentialShipComponent = new PotentialShipComponent();
  currentPotentialShipNumberOfCells: number;


  shipsLengthList: Array<number> = new Array<number>();

  ships: Array<Ship> = new Array<Ship>();

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setPlayerByRouteParams();

    this.setPlayerInfo();

    this.initDemoShips();

    this.getNextShip();
  }

  initDemoShips() {

    let shipToAdd: ShipToLocate ;

    shipToAdd=new ShipToLocate(false,4,11);
    this.addShipToList(shipToAdd);

    shipToAdd=new ShipToLocate(true,4,24);
    this.addShipToList(shipToAdd);

    shipToAdd=new ShipToLocate(false,5,63);
    this.    addShipToList(shipToAdd);

    // this.addShipToLis();
    // this.ships.push(new Ship([24, 34, 44, 54]));
    // this.ships.push(new Ship([63, 64, 65, 66, 67]));
  }

  // private addShipToLis() {
  //   this.ships.push(new Ship([11, 12, 13, 14]));
  //
  //
  // }

  addShipToList(shipToLocate: ShipToLocate) {

    // debugger;
    //
    let shipToAdd: Ship = new Ship(shipToLocate.locations);
    // shipToLocate.map((ship)=>new Ship());

    //this not updating, due to change detection - same reference
    // this.ships.push(shipToAdd);

    // console.log(this.ships);
    this.ships = [...this.ships, shipToAdd];
    // console.log(this.ships);

    this.message = "add new ship !!! length : " + shipToLocate.locations.length;

    shipToLocate.locations.forEach((id)=>this.cellsOfShips.push(id));

    // console.log('cellsOfShips:');
    // console.table(this.cellsOfShips);
  }




  private setPlayerByRouteParams() {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];

        this.isFirstPlayer = (id != 2);

        this.initShipsLengthList();
      }
    );
  }

  initShipsLengthList() {
    this.shipsLengthList.push(2);
    this.shipsLengthList.push(3);
    this.shipsLengthList.push(3);
    this.shipsLengthList.push(4);
    this.shipsLengthList.push(5);
  }

  switchDirection() {
    this.isVertical = !this.isVertical;
  }

  setSelectedShip(numberOfCells: number): void {
    this.currentPotentialShipNumberOfCells = numberOfCells;

    console.log('numberOfCells ', numberOfCells);

    this.resetSettings();
  }


  private resetSettings() {
    this.isVertical = false;

    this.currentShip = null;
    this.currentPotentialShip = null;
  }

  clickCell(id) {
    console.log('you clicked on ', id);

    let shipToLocate: ShipToLocate =
      new ShipToLocate(this.isVertical, this.currentPotentialShipNumberOfCells, id);

    let validationResult: ValidationResult = this.isValidLocationForShip(shipToLocate);

    if (validationResult.isValid) {
      this.addShipToList(shipToLocate);

      this.getNextShip();
    }
    else {
      this.displayValidationMessage(validationResult.message);
    }
  }

  getNextShip(): void {
    let numberOfCells: number = this.shipsLengthList.shift();

    if (numberOfCells) {
      this.setSelectedShip(numberOfCells);
    }
    else {
      this.continueToNextStep();
    }
  }

  private displayValidationMessage(message: string) {
    this.message = message;
  }

  setPlayerInfo(): void {
    if (this.isFirstPlayer) {
      this.player = this.gameService.player1;
    }
    else {
      this.player = this.gameService.player2;
    }
  }

  /*setShipLocation(): void {
   // this.gameService.registerPlayers(model.name1, model.name2)
   }*/

  finishChoose(): void {
//if first then
    this.router.navigate(['choose-location/2']);
    // else
    // this.router.navigate(['start-game']);
  }

  private continueToNextStep() {
    console.log('next step');
  }

  private isValidLocationForShip(shipToLocate: ShipToLocate): ValidationResult {
    //check if in board and also if not already by other ship
    //tbd !!!
    return new ValidationResult(true, '');
  }




/*
  isContainShip(id: number): boolean {
    return this.cellsOfShips.indexOf(id)>-1;
    // this.ships.forEach((ship) => {
    //   if (ship.locations.indexOf(id) > -1) {
    //     // this.isContainBattleship = true;
    //     console.log('isContainBattleship : true - ', id);
    //     // debugger;
    //     return true;
    //   }
    // });
    //
    // return false;
  }*/


}





