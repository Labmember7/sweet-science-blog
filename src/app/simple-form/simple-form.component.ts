import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phones: this.fb.array([])
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }
  addPhone() {
    const phone = this.fb.group({
      area: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      prefix: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
    });
    this.phoneForms.push(phone);
  }
  deletePhone(i: number) {
    this.phoneForms.removeAt(i);
  }
  get email() {
    return this.myForm.get('email');
  }
  phone(i: number) {
    return this.phoneForms.at(i);
  }
}
