import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '~/app/item/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '~/app/item/item';
import { EventData } from 'tns-core-modules/ui/page/page';
import { TextView } from 'tns-core-modules/ui/text-view/text-view';

@Component({
  selector: 'ns-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  itemToUpdate: Item;
  playerName = "";
  playerRole = "";
  itemUpdated = []
  @Output() editPlayerEvent = new EventEmitter;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.itemToUpdate = this.itemService.getItem(id);
    // this.itemUpdated = this.itemService.getItems();
  }

  update() {
    let newPlayer = {
      id: this.itemToUpdate.id,
      name: this.playerName,
      role: this.playerRole
    }
    // let options = {
    //   title: "Player Updated",
    //   okButtonText: "OK"
    // };
    // alert(options).then(() => {
    //   console.log("Player updated!");
    // });

    this.editPlayerEvent.emit(newPlayer)
      // this.itemService.spliceItem(newPlayer)
      // this.itemUpdated.push(newPlayer)
  }

  onTextChangeName(args: EventData) {
    const obj = args.object as TextView;
    this.playerName = obj.text
  }

  onTextChangeRole(args: EventData) {
    const obj = args.object as TextView;
    this.playerRole = obj.text
  }

}
