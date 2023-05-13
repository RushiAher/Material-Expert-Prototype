import { Component } from '@angular/core';

@Component({
  selector: 'app-expert-card',
  templateUrl: './expert-card.component.html',
  styleUrls: ['./expert-card.component.css']
})
export class ExpertCardComponent {
materialExperts = [
    {
      id: 1,
      name: "Dr. Gajanan P",
    summary: "As a chemist, I am having over 15 years of working experience in the top Universities, Institutes and Industries from the various locations of America, Europe and Asia. My key domain competencies include polymer science, formulation chemistry, polymer processing, catalysis, supramolecular chemistry, nanoscience, bio-medical materials, specialty polymer and stimuli responsive materials. I am working in the ChemSci Innovation Pvt Ltd (www.chemsciinnovation.com) as a CTO and you can rely on us for the product development, contract research and troubleshooting. Requesting you to check my profile and our website for more details. I would be happy to discuss your project needs and how I can help you meet them.",
    subjectMatterExperties: ["Catalysis", "Formulation", "Chemistry", "Polymer chemistry", "Analytical Chemistry", "Separation & Purification", "Thermal Analysis", "Supramolecular Chemistry", "Organic Chemistry", "Biomedical Engineering"],
    services:["Writing","Research","Data & AI","WritingTechnical Writing",
      "ResearchFact Checking", "Gray Literature Search", "Systematic Literature Review", "Secondary Data Collection", "Data & AIStatistical Analysis", " Data Visualization"],
    workExperience: [
      {
        id: "1",
        company_name: "ChemSci Innovation",
        position: "CTO",
        startDate: "October 2019 - Present",
        endDate:""
      },
      {
        id: "2",
        company_name: "Research Scientist",
        position: "Solvay",
        startDate: "October 2015",
        endDate:"  September 2019"
      },
      {
        id: "3",
        company_name: "Rutgers University Newark, USA",
        position: "Post-Doc",
        startDate: "May 2013",
        endDate:" November 2013"
      },
      {
        id: "4",
        company_name: "Eindhoven Technical University, The Netherlands",
        position: "Post-Doc",
        startDate: "June 2010 ",
        endDate:"April 2013"
      },
      {
        id: "5",
        company_name: "Radboud University Nijmegen, The Netherlands",
        position: "Research Associate",
        startDate: "May 2013",
        endDate:" November 2013"
      },
      {
        id: "6",
        company_name: "Leibniz-Institut für Oberflächenmodifizierung, Leipzig, Germany",
        position: "Researcher",
        startDate: "March 2007 ",
        endDate:"May 2010"
      },
      {
        id: "7",
        company_name: "National Chemical Laboratory, Pune, India",
        position: "Project Assistant-II",
        startDate: "August 2005 ",
        endDate:"January 2007 "
      },
    ],
    education: [
      {
        id: "1",
        degree:"PhD (Germany)",
        university: "Leipzig University, Germany",
        startDate: "March 2007 ",
        endDate:" March 2010"
      }
    ],
    publications: [
      {
        id: "1",
        details:"Pawar, G.M., Sheridan, J.B., J&#228;kle, F.(2016). Pyridylborates as a New Type of Robust Scorpionate Ligand: From Metal Complexes to Polymeric Materials. European Journal of Inorganic Chemistry. 2016. (15-16). p. 2227-2235."
      },
      {
        id: "2",
        details:"J&#228;kle, F., Sheridan, J.B., Pawar, G.M.(2016). Inside Cover: The Significance of Scorpionate Ligands 50 Years On (Eur. J. Inorg. Chem. 15–16/2016). European Journal of Inorganic Chemistry. 2016. (15-16). p. 2202."
      },
      {
        id: "1",
        details:"Abdelmohsen, L.K.E.A., Nijemeisland, M., Pawar, G.M., Janssen, G.-J.A., Nolte, R.J.M., Van Hest, J.C.M., Wilson, D.A.(2016). Dynamic Loading and Unloading of Proteins in Polymeric Stomatocytes: Formation of an Enzyme-Loaded Supramolecular Nanomotor. ACS Nano. 10. (2). p. 2652-2660."
      },
      {
        id: "1",
        details:"Pawar, G.M., Lalancette, R.A., Bonder, E.M., Sheridan, J.B., Pawar, G.M., Lalancette, R.A., Bonder, E.M., Sheridan, J.B., J&#228;kle, F.(2015). ROMP-Derived Pyridylborate Block Copolymers: Self-Assembly, pH-Responsive Properties, and Metal-Containing Nanostructures. Macromolecules. 48. (18). p. 6508-6515."
      },
      {
        id: "1",
        details:"Pawar, G.M., Wurst, K., Wang, D., Buchmeiser, M.(2014). Bis[bromido(η<sup>4</sup>-cycloocta-1,5-diene)rhodium(I)]. Acta Crystallographica Section E: Structure Reports Online. 70. (2)."
      },
      {
        id: "1",
        details:"Koenigs, M.M.E., Pal, A., Mortazavi, H., Pawar, G.M., Storm, C., Sijbesma, R.P.(2014). Tuning cross-link density in a physical hydrogel by supramolecular self-sorting. Macromolecules. 47. (8). p. 2712-2717."
      },
      {
        id: "1",
        details:"Pawar, G.M., Koenigs, M., Fahimi, Z., Cox, M., Voets, I.K., Wyss, H.M., Sijbesma, R.P.(2012). Injectable hydrogels from segmented PEG-bisurea copolymers. Biomacromolecules. 13. (12). p. 3966-3976."
      },
      {
        id: "1",
        details:"Pawar, G.M., Buchmeiser, M.R.(2010). Polymer-supported, carbon dioxide-protected n-heterocyclic carbenes: Synthesis and application in órgano- and organometallic catalysis. Advanced Synthesis and Catalysis. 352. (5). p. 917-928."
      },
      {
        id: "1",
        details:"Pawar, G.M., Weckesser, J., Blechert, S., Buchmeiser, M.R.(2010). Ring opening metathesis polymerization-derived block copolymers bearing chelating ligands: Synthesis, metal immobilization and use in hydroformylation under micellar conditions. Beilstein Journal of Organic Chemistry. 6."
      },
      {
        id: "1",
        details:"Bantu, B., Pawar, G.M., Decker, U., Wurst, K., Schmidt, A.M., Buchmeiser, M.R.(2009). CO <inf>2</inf> and Sn <sup>II</sup> adducts of N-heterocyclic carbenes as delayed-action catalysts for polyurethane synthesis. Chemistry - A European Journal. 15. (13). p. 3103-3109."
      },
      {
        id: "1",
        details:"Pawar, G.M., Bantu, B., Weckesser, J., Blechert, S., Wurst, K., Buchmeiser, M.R.(2009). Ring-opening metathesis polymerization-derived, polymer-bound Cu-catalysts for click-chemistry and hydrosilylation reactions under micellar conditions. Dalton Transactions. (41). p. 9043-9051."
      },
      {
        id: "1",
        details:"Binder, W.H., Kurzhals, S., Pulamagatta, B., Decker, U., Pawar, G.M., Wang, D., K&#252;hnel, C., Buchmeiser, M.R.(2008). Homologous poly(isobutylene)s: Poly(isobutylene)/high-density poly(ethylene) hybrid polymers. Macromolecules. 41. (22). p. 8405-8412."
      },
      {
        id: "1",
        details:"Shaikh, V.A.E., Lonikar, S.V., Dhobale, D.A., Pawar, G.M.(2007). Cholesterol-linked β-cyclodextrin - A thermotropic liquid-crystalline derivative. Bulletin of the Chemical Society of Japan. 80. (10). p. 1975-1980."
      },
    ],
      img: "../../../../assets/asserts/experts/person1.jpg",
      url:""
    },
    // {
    //   id: 2,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person4.jpg",
    //   url:""
    // },
    // {
    //   id: 3,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person3.jpg",
    //   url:""
    // },
    // {
    //   id: 4,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person1.jpg",
    //   url:""
    // },
    // {
    //   id: 5,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person2.jpg",
    //   url:""
    // },
    // {
    //   id: 6,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person4.jpg",
    //   url:""
    // },
    // {
    //   id: 7,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person3.jpg",
    //   url:""
    // },
    // {
    //   id: 8,
    //   name: "Josh Philip",
    //   summary: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam quod eveniet.",
    //   img: "../../../../assets/asserts/experts/person2.jpg",
    //   url:""
    // },
  ]
}
