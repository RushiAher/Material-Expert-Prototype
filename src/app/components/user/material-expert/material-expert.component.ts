import { Component } from '@angular/core';
declare let $: any
@Component({
  selector: 'app-material-expert',
  templateUrl: './material-expert.component.html',
  styleUrls: ['./material-expert.component.css']
})
export class MaterialExpertComponent {

   showExpertByCategory: boolean = true;
  showExpertBySector: boolean = false;
  showExpertByAssistence: boolean = false;
  showRecommendedExperts: boolean = false;

ngOnInit(): void {
  $(document).ready(()=>{
    $('#material-expert-1').addClass('active')
  })
}
   constructor(){
    window.scroll(0,0)
  }


  showForm(e: any) {
    let id = e.target.id;
    $('.tabs').removeClass('active');
    $('#' + id).addClass('active');
    if (id === 'by_category') {
      this.showExpertByCategory = true; this.showExpertBySector = false; this.showExpertByAssistence = false
    } else if (id === 'by_sector') {
      this.showExpertBySector = true; this.showExpertByCategory = false; this.showExpertByAssistence = false
    } else if (id === 'by_assistance') { this.showExpertByAssistence = true; this.showExpertBySector = false; this.showExpertByCategory = false }
  }

ShowExperts(id:any){
$('.material-expert').removeClass('active')
$('#material-expert-'+id).addClass('active')
$('.form').hide()
$('#matrial-expert-'+id).show()
}

showRecommendedExpert() {
  if (this.showRecommendedExperts) { this.showRecommendedExperts = false }
  else{this.showRecommendedExperts=true}
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

 
  parameterForProductryAssistence = {
    DefineServiceRequirements: ['Environmental Conditions', 'Operating Conditions', 'Functionality of the Part', 'Aesthetic Requirements', 'Ergonomics'],
    ManufacturingRequirement: ['Manufacturing Process', 'Special Treatment', 'Surface Finish'],
    MaterialPropertyRequirement: ['Mechanical Properties', 'Physical Properties', 'Chemical Properties', 'Electrical Properties', 'Thermal Properties', 'Optical Properties']
  }

  sectors = ["All sectors","Aerospace", "Agriculture", "Automotive", "Aviation", "Defense", "Energy", "Electric Vehical","FMCG", "Healthcare", "HVACA", "Pharmaceuticals", "Solar","Oil and Energy"]
}
