
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  displayedColumns = ['image','name','price','stock','action'];
  dataSource = new MatTableDataSource<Product>();
  textSearch: string;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator



  constructor(){}

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
    this.fecthData();
  }

  fecthData(){
    const dummy: Product[] = [
      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      },
      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      },      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      },      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      },      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      },      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      },      {
        name: "i am doing can not i have database of king of data and i will come back home with me and my dada",
        stock: 11244,
        price: 500.5,
        image: "https://www.2beshop.com/images/products/Apple%20iMac%20Pro.jpg"
      },
      {
        name: "mac book",
        stock: 2222,
        price: 20000,
        image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-hero-cto?wid=554&hei=444&fmt=jpeg&qlt=80&.v=1572646185753"
      }
    ]

    this.dataSource.data  = dummy

  }

  search(event: Event){
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch(){
    this.textSearch = '';
    this.search(null);
  }

}
