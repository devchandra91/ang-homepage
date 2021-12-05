import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  get email () {
    return this.registrationForm.get('email');
  }

  get password () {
    return this.registrationForm.get('password');
  }

  showPassword () {
    var x = document.getElementById("exampleInputPassword1");
    if (x?.getAttribute('type') === "password") {
      x?.setAttribute('type', 'text');
    } else {
      x?.setAttribute('type', 'password');
    }
  }

  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]]
  })

  ngOnInit(): void {
  }

}
