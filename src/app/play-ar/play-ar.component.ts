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
    
        if (this.image === "pinball") {
          newObj.setAttribute('url', 'https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball');
          this.url = "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball";
        } else  {
          newObj.setAttribute('url', 'https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex');
          this.url ="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex";
        }
        console.log ("url -->", this.url)
      }
    );
    
  }
}
