import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Customers } from './mock-customers';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  getCustomers(): Observable<Customer[]> {
    this.messageService.clear();
    this.messageService.messages.push('Message: Retrieved Customers');
    return of(Customers);
  }

  getCustomer(id: number): Observable<Customer> {
    this.messageService.clear();
    this.messageService.messages.push('Message: Retrieved Customer with ID: ' + id + '');
    return of(Customers.find(customer => customer.id === id));
  }

  constructor(private messageService: MessageService) { }
}
