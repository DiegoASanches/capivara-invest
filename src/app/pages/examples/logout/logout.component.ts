import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/services/authService.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.setLogout();
    this.router.navigate(['home']);
  }

}
