import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Empdata=[{
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmPassword:""


  }];
  constructor(public abc:HttpClient) { }
  AllEmp(){
   
    return this.abc.get("http://localhost:5200/AllEmp").subscribe((data:any)=>{
      console.log(data);
      this.Empdata=data.data;
    })
  }
  ngOnInit() {
  }

}
