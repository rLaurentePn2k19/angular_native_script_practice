import { Component, OnInit } from '@angular/core';
import { ItemService } from '~/app/item/item.service';
import { Item } from '~/app/item/item';

@Component({
  selector: 'ns-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {

  soccer_list: Array<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.soccer_list = this.itemService.getSoccer();
  }

}
