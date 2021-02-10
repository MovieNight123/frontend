import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public username = '';
  public password = '';
  public confirmpass = '';
  public email = '';
  public name = '';


  constructor(private provider: ProviderService, private router: Router) { }

  ngOnInit(): void {
  }

  clear(){
    this.username = '';
    this.password = '';
    this.confirmpass = '';
    this.email = '';
    this.name = '';
  }

  signUp(){
    if (!this.username || !this.password || !this.confirmpass || !this.name){
      alert('Please fill all fields');
      this.clear();
    } else if(this.password != this.confirmpass){
      alert('Passwords do not match');
      this.clear();
    } else {
      this.provider.register(this.username, this.password, this.username, this.email).then(res => {
        this.clear();
        this.router.navigate(['./login']);
      }).catch(res => {
        alert('Something went wrong. Please, try again,');
        this.clear();
      })
    }
  }

}
