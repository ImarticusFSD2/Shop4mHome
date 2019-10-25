import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  firstname;
  lastname;
  email;
  password;
  confirmPassword;

  Empdata=[{
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    cpassword:""


  }];

  constructor(public abc:HttpClient) {
   }

  reg()
  {
  let  obj={
      "firstname":this.firstname,
      "lastname":this.lastname,
      "email":this.email,
      "password":this.password,
      "cpassword":this.confirmPassword
    }
    console.log(obj)
   return this.abc.post("http://localhost:5200/register",obj).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
  
 
  
  ngOnInit() {
  }

}
