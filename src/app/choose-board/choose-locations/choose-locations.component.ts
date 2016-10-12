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
  cellsOfShips: Array<number> = new Array<number>();

  player: Player;
  isFirstPlayer: boolean;
  message: string = '';
  isVertical: boolean;

  private subscriber: any;

  currentShip: Ship = new Ship(new Array<number>());

  shipsLengthList: Array<number> = new Array<number>();
  ships: Array<Ship>;//= new Array<Ship>();

  currentPotentialShip: PotentialShipComponent = new PotentialShipComponent();
  currentPotentialShipNumberOfCells: number;

  constructor(private gameService: GameService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.setPlayerByRouteParams();

    this.setPlayerInfo();

    this.setPlayerShipsByService();

    this.initDemoShips();

    this.getNextShip();
  }

  initDemoShips() {

    let shipToAdd: ShipToLocate;

    shipToAdd = new ShipToLocate(false, 4, 11);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(true, 4, 24);
    this.addShipToList(shipToAdd);

    shipToAdd = new ShipToLocate(false, 5, 63);
    this.addShipToList(shipToAdd);
  }

  addShipToList(shipToLocate: ShipToLocate) {
    let shipToAdd: Ship = new Ship(shipToLocate.locations);

    this.player.ships = [...this.player.ships, shipToAdd];

    shipToLocate.locations.forEach((id)=>this.cellsOfShips.push(id));
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
    this.shipsLengthList = [2, 3, 3, 4, 5]
  }

  switchDirection() {
    this.isVertical = !this.isVertical;
  }

  setSelectedShip(numberOfCells: number): void {
    this.currentPotentialShipNumberOfCells = numberOfCells;

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

  setPlayerShipsByService(): void {
    this.ships = this.player.ships;
  }




  finishChoose(): void {
//if first then
    this.router.navigate(['choose-location/2']);
    // else
    // this.router.navigate(['start-game']);
  }

  private continueToNextStep() {
    // this.updateService();

    console.log('next step');

    //display button for next step
    //prevent update screen
    //todo: cont here

  }

  private isValidLocationForShip(shipToLocate: ShipToLocate): ValidationResult {
    //check if in board and also if not already by other ship
    //tbd !!!
    return new ValidationResult(true, '');
  }


  private resetMessage() {
    this.message = '';
  }


}

