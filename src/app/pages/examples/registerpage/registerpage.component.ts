import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthServiceService } from "src/app/shared/services/authService.service";

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html",
  styleUrls: ['./../../index/index.component.scss', './registerpage.component.scss'],
})
export class RegisterpageComponent implements OnInit {
  isCollapsed = true;
  focus;
  focus1;
  form: FormGroup;
  focus2;
  formSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthServiceService,
  ) {}

  ngOnInit() {

    this.form = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.compose([Validators.required, Validators.email])]],
      password: [null, Validators.required],
    });
  }
  onSubmit() {
    this.formSubmitted = true;
    debugger;
    console.log('form', this.form);
    if (this.form && this.form.status === 'INVALID') {
      return;
    }
    this.router.navigate(['profile']);
    this.authService.setLogged();
  }
}
