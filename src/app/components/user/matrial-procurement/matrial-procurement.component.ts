import { Component } from '@angular/core';

@Component({
  selector: 'app-matrial-procurement',
  templateUrl: './matrial-procurement.component.html',
  styleUrls: ['./matrial-procurement.component.css']
})
export class MatrialProcurementComponent {

  categories = [
    {
      id: 1,
      name: "Metals",
      img: "../../../../assets/asserts/categories/metals.png",
      url:""
    },
    {
      id: 2,
      name: "Chemicals",
      img: "../../../../assets/asserts/categories/chemicals.png",
      url:""
    },
    {
      id: 3,
      name: "Polymers",
      img: "../../../../assets/asserts/categories/polymers.png"
    },
    {
      id: 4,
      name: "Composites",
      img: "../../../../assets/asserts/categories/composites.png",
      url:""
    },
    {
      id: 5,
      name: "Ceramics",
      img: "../../../../assets/asserts/categories/ceramics.png",
      url:""
    },
    {
      id: 6,
      name: "Natural Materials",
      img: "../../../../assets/asserts/categories/natural-material.png",
      url:""
    },
  ]
}
