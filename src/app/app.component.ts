import {Component} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // latest snapshot
  public webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }
}
