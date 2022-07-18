import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { BadgeModule } from 'primeng/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrdersSumaryComponent } from './components/orders-sumary/orders-sumary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
    {
        path: 'cart',
        component: CartPageComponent
    },
    {
        path: 'checkout',
        component: CheckoutPageComponent
    },
    {
        path: 'success',
        component: ThankYouComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        BadgeModule,
        ButtonModule,
        InputNumberModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
        InputMaskModule,
        DropdownModule
    ],
    declarations: [CartIconComponent, CartPageComponent, OrdersSumaryComponent, CheckoutPageComponent, ThankYouComponent],
    exports: [CartIconComponent, CartPageComponent, OrdersSumaryComponent, CheckoutPageComponent, ThankYouComponent]
})
export class OrdersModule {
    constructor(cartService: CartService) {
        cartService.initCartLocalStorage();
    }
}
