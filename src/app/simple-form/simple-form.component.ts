import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  articleForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.articleForm = this.fb.group({
      title: ['', [
        Validators.required,
      ]],
      sections: this.fb.array([])
    });
    this.articleForm.valueChanges.subscribe(console.log);
  }
  get sectionsForms() {
    return this.articleForm.get('sections') as FormArray;
  }

  addSectionForm() {
    const section = this.fb.group({
      content: ['', [
        Validators.required,
      ]],
      imagePath: ['', [
        Validators.required,
      ]],
    });
    this.sectionsForms.push(section);
  }
  deleteSection(i: number) {
    this.sectionsForms.removeAt(i);
  }
  get title() {
    return this.articleForm.get('title');
  }
  section(i: number) {
    return this.sectionsForms.at(i);
  }
}
