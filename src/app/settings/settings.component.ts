import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isChecked = true;
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
  
  ngOnInit(): void {
  }

}
