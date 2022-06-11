import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrdersService } from '@bluebits/orders';
import { MessageService } from 'primeng/api';
import { ORDER_STATUS } from '../order.constants';

@Component({
    selector: 'admin-order-detail',
    templateUrl: './orders-details.component.html',
    styles: []
})
export class OrdersDetailsComponent implements OnInit {
    order: Order;
    orderStatuses = [];
    selectedStatus: any;

    constructor(private orderService: OrdersService, private messageService: MessageService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this._mapOrderStatus();
        this._getOrder();
    }

    private _mapOrderStatus() {
        this.orderStatuses = Object.keys(ORDER_STATUS).map((key) => {
            return {
                id: key,
                name: ORDER_STATUS[key].label
            };
        });
    }

    private _getOrder() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.orderService.getOrder(params.id).subscribe((order) => {
                    this.order = order;
                    this.selectedStatus = order.status;
                });
            }
        });
    }

    onStatusChange(event) {
        this.orderService.updateOrder({ status: event.value }, this.order.id).subscribe({
            next: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Order is updated!'
                });
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Order is not updated!'
                });
            }
        });
    }
}
