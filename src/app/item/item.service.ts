import { Injectable } from "@angular/core";

import { Item, Type } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {

    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", type: Type.Artist },
        { id: 2, name: "Rangie", role: "Striker", type: Type.Soccer },
        { id: 3, name: "Chervin", role: "Defender", type: Type.Soccer },
        // { id: 4, name: "I. Rakitic", role: "Midfielder", type: "soccer" },
        // { id: 5, name: "Sergio", role: "Midfielder", type: "artists" },
        // { id: 6, name: "Denis Suárez", role: "Midfielder" , type: "soccer"},
        // { id: 7, name: "Arda", role: "Midfielder", type: "artist" },
        // { id: 8, name: "A. Iniesta", role: "Midfielder", type: "soccer"},
        // { id: 9, name: "Suárez", role: "Forward", type: "artist"},
        // { id: 10, name: "Messi", role: "Forward", type: "soccer"},
        // { id: 11, name: "Neymar", role: "Forward", type: "artist" },
        // { id: 12, name: "Rafinha", role: "Midfielder", type: "soccer"},
        // { id: 13, name: "Cillessen", role: "Goalkeeper", type: "artist"},
        // { id: 14, name: "Mascherano", role: "Defender", type: "soccer"},
        // { id: 17, name: "Paco Alcácer", role: "Forward", type: "artist"},
        // { id: 18, name: "Jordi Alba", role: "Defender", type: "soccer"},
        // { id: 19, name: "Digne", role: "Defender", type: "artist"},
        // { id: 20, name: "Sergi Roberto", role: "Midfielder", type: "soccer"},
        // { id: 21, name: "André Gomes", role: "Midfielder", type: "artist"},
        // { id: 22, name: "Aleix Vidal", role: "Midfielder", type: "soccer"},
        // { id: 23, name: "Umtiti", role: "Defender", type: "artist"},
        // { id: 24, name: "Mathieu", role: "Defender", type: "soccer"},
        // { id: 25, name: "Masip", role: "Goalkeeper", type: "artist"}
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    getLength() {
        return this.items.length
    }


    getArtists(): Array<Item> {
        // var list_artist: Array<Item> = [];
        // this.items.forEach(element => {
        //     if (element.type == Type.Artist) {
        //         list_artist.push(element)
        //     }
        // });
        // return list_artist;
        return this.items.filter((item) => item.type == Type.Artist)
    }

    getSoccer(): Array<Item> {
        // var list_soccer: Array<Item> = [];
        // this.items.forEach(element => {
        //     if (element.type == Type.Soccer) {
        //         list_soccer.push(element)
        //     }
        // });
        // return list_soccer;
        return this.items.filter((item) => item.type == Type.Soccer)
    }

    addItem(data: any) {
        data.id = this.items[this.items.length - 1].id + 1,
        this.items.push(data)
    }

    // getSoccer() {
    //     return this.items.filter((item) => item.type === "soccer")
    // }

    // getArtists() {
    //     return this.items.filter((item) => item.type === "artist")
    // }

}
