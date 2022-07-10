import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsModule } from '@bluebits/products';
import { UiModule } from '@bluebits/ui';
import { HttpClientModule } from '@angular/common/http';
import { OrdersModule } from '@bluebits/orders';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, HomePageComponent, HeaderComponent, FooterComponent, NavComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule, ProductsModule, AccordionModule, BrowserAnimationsModule, UiModule, OrdersModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
