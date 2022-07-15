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
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'cart',
        component: CartPageComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule, RouterModule.forChild(routes), BadgeModule, ButtonModule, InputNumberModule, FormsModule],
    declarations: [CartIconComponent, CartPageComponent, OrdersSumaryComponent],
    exports: [CartIconComponent, CartPageComponent, OrdersSumaryComponent]
})
export class OrdersModule {
    constructor(cartService: CartService) {
        cartService.initCartLocalStorage();
    }
}
