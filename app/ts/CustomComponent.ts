import { Component } from "angular2/core";

@Component({
    selector:"custompage",
    templateUrl:"../../typings/FirstApp.html"
    
})

export class CustomComponent{
    message="ben Controllerdan geldim Broo";
    veri:String[] = ["Ali","Veli","49","elli"];

    calistir():void{
        console.log("Calisti");
    }
}


