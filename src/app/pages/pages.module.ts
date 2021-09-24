import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";

import { IndexComponent } from "./index/index.component";
import { ProfilepageComponent } from "./examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./examples/landingpage/landingpage.component";
import { NavbarModule } from "../components/navbar/navbar.module";
import { MainBannerModule } from "../components/main-banner/main-banner.module";
import { HeaderModule } from "../components/header/header.module";
import { FooterModule } from "../components/footer/footer.module";
import { LoginComponent } from "./examples/login/login.component";
import { AddInvestmentModule } from "./examples/profilepage/add-investment/add-investment.module";

@NgModule({
  imports: [
    NavbarModule,
    MainBannerModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    AddInvestmentModule,
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    LoginComponent,
  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent
  ],
  providers: []
})
export class PagesModule {}
