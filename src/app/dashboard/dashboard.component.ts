import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: Customer[];

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers.slice(0, 3));
  }
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

}
