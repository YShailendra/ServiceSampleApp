import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password:string;
  public username:string;
  public result:any;
  public pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[\W&.\-]).{8,}$";
  public p2="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}";
  public email='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
  constructor(private loginservice:LoginService,private router:Router) { 
    this.loginservice.LogOut();
  }

  ngOnInit() {
  }
  Login()
  {
    this.result=this.loginservice.Login(this.username,this.password).subscribe(data=>{
      var result= {isloggedIn:false,message:""};
     var res=data as any;
    if(this.username==res.username && this.password==res.password)
    {
      this.loginservice.SetLogin();
      this.router.navigate(['services']);//navigate to service
    }
    else
    {
      result.message="Username and password did not match!";
    }
    this.result=result;
    },error=>{

    });
  }
}
