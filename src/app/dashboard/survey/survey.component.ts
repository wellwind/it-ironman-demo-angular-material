import { FormGroup, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatStepperIntl } from '@angular/material';

export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [{ provide: MatStepperIntl, useClass: TwStepperIntl }]
})
export class SurveyComponent implements OnInit {
  isLinear: boolean;

  surveyForm: FormGroup;
  constructor() {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required)
      })
    });
  }

  ngOnInit() {}
}
