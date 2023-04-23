import { Component } from '@angular/core';
declare let $:any
@Component({
  selector: 'app-matrial-procurement',
  templateUrl: './matrial-procurement.component.html',
  styleUrls: ['./matrial-procurement.component.css']
})
export class MatrialProcurementComponent {

  constructor(){
    window.scroll(0,0)
  }

chemicalPurity:any = '50';

ngOnInit(): void {
  $(document).ready(()=>{
    $('#Procurement-matrial-1').addClass('active')
  })
}

ShowMatrialForm(id:any){
$('.Procurement-matrial').removeClass('active')
$('#Procurement-matrial-'+id).addClass('active')
$('.form').hide()
$('#matrial-'+id).show()
}

setPurity(e:any){
  this.chemicalPurity = e.target.value
}

  categories = [
    {
      id: 1,
      name: "Metals",
      img: "../../../../assets/asserts/categories/metals.png",
    },
    {
      id: 2,
      name: "Chemicals",
      img: "../../../../assets/asserts/categories/chemicals.png",
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
    },
    {
      id: 5,
      name: "Ceramics",
      img: "../../../../assets/asserts/categories/ceramics.png",
    },
    {
      id: 6,
      name: "Natural Materials",
      img: "../../../../assets/asserts/categories/natural-material.png",
    },
  ]
}
