// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import { Page, EventData } from "tns-core-modules/ui/page";
import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout";
import { Label } from "tns-core-modules/ui/label"
import { TouchGestureEventData, GestureTypes } from 'tns-core-modules/ui/gestures';


// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);

export function testDrag(args: EventData){

    let page = <Page>args.object;
    let layout = <AbsoluteLayout>page.getViewById('layout');
    let draggable = <Label>page.getViewById('draggable');
  
    layout.on(GestureTypes.touch, (args: TouchGestureEventData)=>{
      AbsoluteLayout.setLeft(draggable, args.getX() - 50);
      AbsoluteLayout.setTop(draggable, args.getY() - 50);
    })
}