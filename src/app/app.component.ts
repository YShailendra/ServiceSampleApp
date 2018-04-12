import { Component,OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public IsloggedIn=false;
  constructor(private loginService:LoginService)
  {
    this.IsloggedIn=this.loginService.IsLoggedIn();
  }
  ngOnInit()
  {
    //subscribe the change from login service, when there is change in login 
    this.loginService.change.subscribe(s=>{
      this.IsloggedIn=s;
    })
  }
  //logout
  Logout()
  {
    this.loginService.LogOut();//this will logut user from apploication
  }
}
