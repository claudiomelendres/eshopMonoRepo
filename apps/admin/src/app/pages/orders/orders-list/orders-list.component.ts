import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrdersService, ORDER_STATUS } from '@bluebits/orders';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    selector: 'admin-order-list',
    templateUrl: './orders-list.component.html',
    styles: []
})
export class OrdersListComponent implements OnInit {
    orders: Order[] = [];
    orderStatus = ORDER_STATUS;
    constructor(
        private ordersService: OrdersService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this._getOrders();
    }

    _getOrders() {
        console.log(this.orderStatus.Failed.label);

        this.ordersService.getOrders().subscribe((orders) => {
            console.log(orders);
            this.orders = orders;
        });
    }

    showOrder(orderId) {
        this.router.navigateByUrl(`orders/${orderId}`);
    }

    deleteOrder(orderId: string) {
        this.confirmationService.confirm({
            message: 'Do you want to Delete this Order?',
            header: 'Delete Order',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.ordersService.deleteOrder(orderId).subscribe({
                    next: () => {
                        this._getOrders();
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Order is deleted!'
                        });
                    },
                    error: () => {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Order is not deleted!'
                        });
                    }
                });
            }
        });
    }
}
