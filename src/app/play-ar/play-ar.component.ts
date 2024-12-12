import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-play-ar',
  templateUrl: './play-ar.component.html',
  styleUrls: ['./play-ar.component.css']
})
export class PlayArComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

   public jsonobj = {
    "pinball": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball",
    "trex": "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"  
  };
  image: any;
  url: any;
  color: any;
  
  ngOnInit(): void {
    console.log ("first step");
    this.route.queryParams
      .filter(params => params.image)
      .subscribe(params => {
        console.log(params); // { order: "popular" }
        this.image = params.image;
        console.log(this.image); // popular
        var sceneEl = document.querySelector('a-scene');
        var newObj = sceneEl.querySelector('#hmnft');
        var entity =  document.querySelector('a-entity');
        var aframeObj = entity.querySelector("#refresh-button")
    
        if (this.image === "azim") {
          newObj.setAttribute('url', 'https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/azim/azim');
          this.url = "https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/azim/azim";
          aframeObj.setAttribute('material', 'color:blue');
          this.color ="color:blue";

        } else if (this.image==='dalai') {
          newObj.setAttribute('url', 'https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/dalai/dalai');
          this.url ="https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/dalai/dalai";
          aframeObj.setAttribute('material', 'color:green');
          this.color ="color:green";
        } else if (this.image==='shoedog') {
          newObj.setAttribute('url', 'https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/shoedog/shoedog');
          this.url ="https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/shoedog/shoedog";
          aframeObj.setAttribute('material', 'color:red');
          this.color ="color:red";
        } else if (this.image==='whomoved') {
          newObj.setAttribute('url', 'https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/whomoved/whomoved');
          this.url ="https://arjs-cors-proxy.herokuapp.com/https://cdn.statically.io/gh/meena-sriram/ar-project/0f827ebb/src/assets/whomoved/whomoved";
          aframeObj.setAttribute('material', 'color:yellow');
          this.color ="color:yellow";
        } 


        console.log ("url -->", this.url)
      }
    );
    
  }
}
