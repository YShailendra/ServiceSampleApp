import { Injectable,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class LoginService {

  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient:HttpClient,private router:Router) { }
  //login
  public Login(usr:string,pwd:string)
  {
    return this.httpClient.get("./assets/userdata.json");
  }

  public IsLoggedIn()
  {
    var data= localStorage.getItem('isLoggedIn');
    console.log("guard="+data)
    if(data && data=='1')
    {
      return true;
    }
    this.router.navigate(['']); 
    return false;
  }
  public SetLogin()
  {
    localStorage.setItem("isLoggedIn",'1');
    this.change.emit(this.IsLoggedIn());
  }
  public LogOut()
  {
    localStorage.removeItem("isLoggedIn");
    this.change.emit(this.IsLoggedIn());
  }
}
