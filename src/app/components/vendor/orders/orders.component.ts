import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orderData =
    [{ id: "123456",date: "2023-04-15", product: "Copper", payment: "3500", status: "delivered", customerId: "X5U6G2S8" },
    { id: "234567", date: "2023-04-16", product: "Gold", payment: "1200", status: "delivered", customerId: "A3K9F2J7" },
    { id: "345678", date: "2023-04-17", product: "Iron", payment: "5600", status: "pending", customerId: "H4N6T8E2" },
    { id: "456789", date: "2023-04-18", product: "Silver", payment: "1565", status: "delivered", customerId: "W8C7R2L9" },
    { id: "567890", date: "2023-04-19", product: "Aluminum", payment: "506", status: "delivered", customerId: "P9V5B6H2" },
    { id: "678901", date: "2023-04-20", product: "Platinum", payment: "150", status: "delivered", customerId: "D4G9J1F7" },
    { id: "789012", date: "2023-04-21", product: "Carbon", payment: "1560", status: "canceled", customerId: "S6M2T8W1" },
    { id: "890123", date: "2023-04-22", product: "Diamond", payment: "2560", status: "pending", customerId: "B5L2V9Q3" },
    { id: "901234", date: "2023-04-23", product: "Zinc", payment: "1780", status: "pending", customerId: "R1K8X9F5" },
    { id: "012345", date: "2023-04-24", product: "Titanium", payment: "1150", status: "delivered", customerId: "J9T6N7P4" }]


}
