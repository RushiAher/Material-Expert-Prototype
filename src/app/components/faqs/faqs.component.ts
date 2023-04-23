import { Component, Input } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  @Input() faqData!: any[];

  showAnswer(id:any){
  $('.answer-div').slideUp();
  $('.plus-icon').html('add');
  $('#icon-'+id).html('remove');
  $('#answer-'+id).slideDown();
  }


   faqsData = [
    {
      id: 1,
      question: "What types of raw materials do you offer?",
      answer: "We offer a wide variety of raw materials, including metals, plastics, polymers, composites, ceramics, natural materials, textiles, chemicals, and more. Please let us know your specific needs and we can recommend the best options for you."
    },
    {
      id: 2,
      question: "How do I place an order for raw materials?",
      answer: "You can place an order for raw materials directly on our website. Simply select the materials you need, specify the quantity, and complete the checkout process."
    },
    {
      id: 3,
      question: "What is the lead time for delivery of raw materials?",
      answer: "The lead time for delivery of raw materials depends on the type of material and the quantity ordered. We will provide you with an estimated delivery date when you place your order."
    },
    {
      id: 4,
      question: "How do you ensure the quality of your raw materials?",
      answer: "We work with reputable suppliers and conduct regular quality control checks to ensure that our raw materials meet industry standards and our customers' needs."
    },
    {
      id: 5,
      question: "What is your customer service process?",
      answer: "We pride ourselves on providing excellent customer service. Our team is available to answer any questions you may have, and we will work with you to find a solution to any issues that may arise. You can contact us by phone, email, or through our website."
    },
    {
      id: 6,
      question: "What is your return policy for raw materials?",
      answer: "We understand that sometimes materials may need to be returned, and we have a clear and fair return policy in place. Please contact us if you need to return any materials, and we will work with you to find a solution."
    }
    ,
    {
      id: 7,
      question: "Do you offer discounts for bulk orders?",
      answer: "Yes, we offer discounts for bulk orders. Please contact us for a quote."
    },
    {
      id: 8,
      question: "Can you provide technical specifications for the raw materials you offer",
      answer: "Yes, we can provide technical specifications for the raw materials we offer. Please let us know your specific needs and we can provide you with the necessary information."
    }
  ]


}
