import { Component, OnInit } from '@angular/core';
import { ItemService } from '~/app/item/item.service';
import { Item } from '~/app/item/item';

@Component({
  selector: 'ns-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artist_list: Array<Item>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.artist_list = this.itemService.getArtists();
  }

}
