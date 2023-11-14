import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from "@angular/material/toolbar";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegulierungenComponent } from './regulierungen/regulierungen.component';
import { EntwicklungComponent } from './entwicklung/entwicklung.component';
import { NachhaltigkeitComponent } from './nachhaltigkeit/nachhaltigkeit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'index', component: HomeComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'regulierungen', component: RegulierungenComponent},
  { path: 'nachhaltigkeit', component: NachhaltigkeitComponent},
  { path: 'entwicklung', component: EntwicklungComponent},
  { path: 'impressum', component: ImpressumComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ImpressumComponent,
    KontaktComponent,
    RegulierungenComponent,
    EntwicklungComponent,
    NachhaltigkeitComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        FormsModule,
        MatSidenavModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
