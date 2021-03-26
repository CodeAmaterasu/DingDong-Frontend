import { Component, OnInit } from '@angular/core';
import {RegisterService} from "./register.service";
import {FormControl} from "@angular/forms";
import {User} from "./User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public firstname = new FormControl('', []);
  public lastname = new FormControl('', []);
  public email = new FormControl('', []);
  public password = new FormControl('', []);

  constructor(private service: RegisterService) { }

  private masterPassword = '12345678';

  ngOnInit(): void {
  }

  public register(): void {
    const user = new User();

    user.Firstname = this.firstname.value;
    user.Lastname = this.lastname.value;
    user.Email = this.email.value;

    if (this.password.value === this.masterPassword) {
      this.service.registerUser(user).subscribe(data => {
      }, error => {
        alert('Server Error: ' + error.message);
      });
    } else {
      alert('Wrong Masterpassword!');
    }
  }

}
