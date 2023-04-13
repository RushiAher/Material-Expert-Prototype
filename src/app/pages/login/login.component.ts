import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare let $:any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  regexMail:any =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/

  headerText:boolean=true;
  showLogin:boolean = true;

  userType:any
  hasError:boolean = false;
  errorMsg:any

  constructor(private route:Router){}

  ToggleForm(){
  this.headerText = !this.headerText;
  this.showLogin = !this.showLogin;
  }

  setUserType(e:any){
    this.userType = e.target.value
    localStorage.setItem('userType', this.userType)
  }

  signUp(){
    if(this.userType == '' || this.userType == undefined || this.userType == null){
      this.hasError = true
      this.errorMsg = 'please select a user type'
    }else{
      this.hasError = false
      this.errorMsg = ''
      if(this.userType === 'user'){
        this.route.navigateByUrl('/')
      }else if(this.userType === 'vendor'){
        this.route.navigateByUrl('/vendor/dashboard')
      }
    }
  }

  checkEmail(e:any){
  let value = e.target.value
  if(!this.regexMail.test(value)){
    this.hasError = true
    this.errorMsg = 'please enter your valid email'
    $('#email').addClass('error-b')
  }else{
    let user_Type = value.toLowerCase().split('@')
    this.userType = user_Type[0]
  }
  }

  checkLogin(){
    if(this.userType == '' || this.userType == undefined || this.userType == null){
      this.hasError = true
      this.errorMsg = 'please enter your email'
      $('#email').addClass('error-b')
    }else if(this.userType != 'user' && this.userType != 'vendor'){
      this.hasError = true
      this.errorMsg = 'Email does not Exist'
      $('#email').addClass('error-b')
    }else{
      this.hasError = false
      this.errorMsg = ''
      $('#email').removeClass('error-b')
      localStorage.setItem('userType', this.userType)
      if(this.userType === 'user'){
        this.route.navigateByUrl('/')
      }else if(this.userType === 'vendor'){
        this.route.navigateByUrl('/vendor/dashboard')
      }
    }
  }

}
