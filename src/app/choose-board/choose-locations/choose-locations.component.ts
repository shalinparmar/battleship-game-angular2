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
  cellsOfShips: Array<number> ;//= new Array<number>();
  cellsOfShipsSimulation: Array<number> = new Array<number>();

  player: Player;
  isFirstPlayer: boolean;
  message: string = '';
  isVertical: boolean;

  isFinishedChoosing: boolean = false;


  private subscriber: any;

  currentShip: Ship = new Ship(new Array<number>());

  shipsLengthList: Array<number> = new Array<number>();
  ships: Array<Ship>;//= new Array<Ship>();

  currentPotentialShip: PotentialShipComponent = new PotentialShipComponent();
  currentShipNumberOfCells: number;

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setPlayerByRouteParams();

  }

  initDemoShips() {

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

  addShipToList(shipToLocate: ShipToLocate) {
    let shipToAdd: Ship = new Ship(shipToLocate.locations);

    this.player.ships = [...this.player.ships, shipToAdd];

    shipToLocate.locations.forEach((id)=>this.player.cellsOfShips.push(id));
  }

  private addShipToSimulationList(shipToLocate: ShipToLocate) {
    shipToLocate.locations.forEach((id)=>this.cellsOfShipsSimulation.push(id));
  }

  private clearSimulationList() {
    this.cellsOfShipsSimulation = new Array<number>();
  }

  private setPlayerByRouteParams() {
    this.subscriber = this.route.params.subscribe(
      params => {
        let id = +params['id'];

        this.isFirstPlayer = (id != 2);

        this.initPage();
      }
    );
  }

  private initPage() {
    console.log('init page');

    this.resetVariables();

    this.setPlayerInfo();

    this.setPlayerShipsByService();

    // this.initDemoShips();

    this.initShipsLengthList();

    this.getNextShip();
  }

  private resetVariables() {
    // this.cellsOfShips = new Array<number>();
    this.message = '';
    this.isVertical = false;

    this.isFinishedChoosing = false;

    this.currentShip = new Ship(new Array<number>());

    this.shipsLengthList = new Array<number>();
    // ships: Array<Ship>;//= new Array<Ship>();

    this.currentPotentialShip = new PotentialShipComponent();
    this.currentShipNumberOfCells = 0;
  }

  initShipsLengthList() {
    //todo: get from config
    this.shipsLengthList = [2, 3, 3, 4, 5]
  }

  switchDirection() {
    this.isVertical = !this.isVertical;
  }

  setSelectedShip(numberOfCells: number): void {
    this.currentShipNumberOfCells = numberOfCells;
    this.resetSettings();
  }

  private resetSettings() {
    this.isVertical = false;
    this.currentShip = null;
    this.currentPotentialShip = null;
  }

  clickCell(id) {

    this.resetMessage();

    console.log('you clicked on ', id);

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


  mouseOverCell(id) {
    // console.log('mouseOverCell on ', id);

    let shipToLocate: ShipToLocate =
      new ShipToLocate(this.isVertical, this.currentShipNumberOfCells, id);

    let validationResult: ValidationResult = this.isValidLocationForShip(shipToLocate);

    if (validationResult.isValid) {
      this.addShipToSimulationList(shipToLocate);
    }
  }

  mouseOutCell(id) {
    // console.log('mouseOutCell on ', id);

    this.clearSimulationList();
  }

  getNextShip(): void {
    let numberOfCells: number = this.shipsLengthList.shift();

    if (numberOfCells) {
      this.setSelectedShip(numberOfCells);
    }
    else {

      this.isFinishedChoosing = true;

      console.log('player 1 ships');
      console.table(this.gameService.player1.ships);

      console.log('player 2 ships');
      console.table(this.gameService.player2.ships);

      // this.continueToNextStep();
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

    this.player.ships = new Array<Ship>();
  }

  setPlayerShipsByService(): void {
    this.ships = this.player.ships;
    this.cellsOfShips= this.player.cellsOfShips;
  }


  private continueToNextStep() {

    console.log('next step');

    if (this.isFirstPlayer) {
      //if first then
      this.router.navigate(['choose-location/2']);
    }
    else {
      this.router.navigate(['start-game']);
    }
  }

  private isValidLocationForShip(shipToLocate: ShipToLocate): ValidationResult {
    //check if in board and also if not already by other ship
    //tbd !!!
    return new ValidationResult(true, '');
  }


  private resetMessage() {
    this.message = '';
  }

  //todo: validation
  //todo: game

}
