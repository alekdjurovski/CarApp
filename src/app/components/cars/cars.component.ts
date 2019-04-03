import { Component, OnInit } from '@angular/core';
import { Car } from '../../shared/models/car';
import cars from 'src/app/shared/models/car-list';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor() { }

  ngOnInit() {
    this.cars = cars;
  }

}
