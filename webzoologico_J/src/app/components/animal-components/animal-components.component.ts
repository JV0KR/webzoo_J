import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal-service.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-component',
  imports: [ReactiveFormsModule],
  templateUrl: './animal-components.component.html',
  styleUrl: './animal-components.component.css',
})
export class AnimalComponent {

  animalList: any = [];

  constructor(
    private animalService: AnimalService) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    
    this.getAllAnimals();
  }

}