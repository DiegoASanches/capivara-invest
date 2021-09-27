import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import noUiSlider from "nouislider";
import { AuthServiceService } from 'src/app/shared/services/authService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './../../pages/index/index.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  showHeader = false;
  constructor(
    private authService: AuthServiceService,
    private changeDetectorRef: ChangeDetectorRef,
    private zone: NgZone,
  ) {}
  ngOnInit() {
      this.applyHeader();
  }

  applyHeader() {
      this.showHeader = true;
      this.isLogged = this.authService.isLoggedIn() === 'true' ? true : false;
  }
}
