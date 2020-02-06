import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TestComponentComponent } from './test-component/test-component.component';
import { FormComponent } from './form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { FloatBtnComponent } from './float-btn/float-btn.component';
import { ArtistsComponent } from './artists/artists.component';
import { SoccerComponent } from './soccer/soccer.component';
import { HomeComponent } from './home/home.component';
// import { FloatBtnComponent} from './float-btn.component';
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        TestComponentComponent,
        FormComponent,
        UpdateFormComponent,
        FloatBtnComponent,
        ArtistsComponent,
        SoccerComponent,
        HomeComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
