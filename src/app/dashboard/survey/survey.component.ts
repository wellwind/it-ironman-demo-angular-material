import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, ValidatorFn, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatStepperIntl, ErrorStateMatcher, MatDatepickerInputEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import * as moment from 'moment';

export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

// 調整時機為invalid + dirty即顯示錯誤訊息
export class EarlyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [{ provide: MatStepperIntl, useClass: TwStepperIntl }, { provide: ErrorStateMatcher, useClass: EarlyErrorStateMatcher }]
})
export class SurveyComponent implements OnInit {
  startDate = moment('1999-1-10');
  minDate = moment('1999-1-5');
  maxDate = moment('1999-1-15');

  isLinear: boolean;

  surveyForm: FormGroup;
  intro: string;
  countries$: Observable<any[]>;

  majorTechList: any[];
  constructor(private httpClient: HttpClient) {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required),
        intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
        country: new FormControl(''),
        majorTech: new FormControl(''),
        birthday: new FormControl('')
      })
    });
  }

  ngOnInit() {
    this.surveyForm
      .get('basicQuestions')
      .get('country')
      .valueChanges.debounceTime(300)
      .subscribe(inputCountry => {
        this.countries$ = this.httpClient.get<any[]>('assets/countries.json').map(countries => {
          return countries.filter(country => country.name.indexOf(inputCountry) >= 0);
        });
      });

    this.majorTechList = [
      {
        name: '前端',
        items: ['HTML', 'CSS', 'JavaScript']
      },
      {
        name: '後端',
        items: ['C#', 'NodeJs', 'Go']
      }
    ];
  }

  highlightFiltered(countryName: string) {
    const inputCountry = this.surveyForm.get('basicQuestions').get('country').value;
    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }

  displayCountry(country: any) {
    if (country) {
      return `${country.name} / ${country.code}`;
    } else {
      return '';
    }
  }

  familyDayFilter(date: moment.Moment): boolean {
    const day = date.day();
    return day !== 2 && day !== 5;
  }

  logDateInput($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }

  logDateChange($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
}
