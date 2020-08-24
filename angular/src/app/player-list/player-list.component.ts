import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  results: Player[] = [];
  sortMode: string = "Team";
  sortDesc: boolean = false;
  minNumber: number = 0;
  maxNumber: number = 100;

  toggleSortDir(): void {
    this.sortDesc = !this.sortDesc;
    this.refresh();
  }

  changeSortMode(input: string): void {
    this.sortMode = input;
    this.refresh();
  }

  refresh(): void {
    const filterPlayers = (player) => {
      return player.Number >= this.minNumber && player.Number <= this.maxNumber;
    };

    const sortPlayers = (a, b) => {
      var sortProp = this.sortMode;
      if (a[sortProp] < b[sortProp])
        return -1;
      if (a[sortProp] > b[sortProp])
        return 1;
      return 0;
    };

    var temp = PLAYERS.filter(filterPlayers).sort(sortPlayers);
    if (this.sortDesc) {
      temp = temp.reverse();
    }

    this.results = temp;
  }

  constructor() { }

  ngOnInit(): void {
    this.refresh();
  }

}
