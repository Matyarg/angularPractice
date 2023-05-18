import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './models/product.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle(){
    if (this.title === 'practice') {
      this.title = 'cambiado'
    } else {
    this.title = 'practice'
    }
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data;
    })

  }

}
