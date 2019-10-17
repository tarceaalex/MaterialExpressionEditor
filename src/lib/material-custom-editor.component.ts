import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { GenericModel } from './models/generic.model';
import { ExpressionModel } from './models/expression.model';
import { MaterialCustomEditorService } from './material-custom-editor.service';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'lib-material-custom-editor',
  templateUrl: './material-custom-editor.component.html',
  styleUrls: ['./material-custom-editor.component.css'],
  styles: []
})
export class MaterialCustomEditorComponent implements OnInit {
  @Input() variables: GenericModel[];
  @Input() customFunctions: GenericModel[];
  @Input() fixedFunctions: GenericModel[];
  @Input() expression: string;
  @Output() cancelEvent = new EventEmitter<boolean>();
  @Output() submitEvent = new EventEmitter<string>();
  newExpression: string = '';

  variablesControl = new FormControl();
  filteredVariables: Observable<GenericModel[]>;

  customFunctionsControl = new FormControl();
  filteredCustomFunctions: Observable<GenericModel[]>;

  fixedFunctionsControl = new FormControl();
  filteredFixedFunctions: Observable<GenericModel[]>;

  _language: string = '';
  @Input()
  set language(lang: string) {
    this._language = lang;
    this._translateService.setLanguage(this._language);
  }

  constructor(
    private _materialCustomEditorService: MaterialCustomEditorService,
    private _translateService: TranslateService
  ) { }

  ngOnInit() {
    if (this.expression)
      this.newExpression = this.expression;

    this.filteredVariables = this.variablesControl.valueChanges
      .pipe(startWith(''), map(value => this._filterVariables(value)));
    this.filteredCustomFunctions = this.customFunctionsControl.valueChanges
      .pipe(startWith(''), map(value => this._filterCustomFunctions(value)));
    this.filteredFixedFunctions = this.fixedFunctionsControl.valueChanges
      .pipe(startWith(''), map(value => this._filterFixedFunctions(value)));
  }

  private _filterVariables(value: string): GenericModel[] {
    const filterValue = value.toLowerCase();
    return this.variables.filter(option => option.name.toLowerCase().includes(filterValue) || option.value.toLowerCase().includes(filterValue));
  }

  private _filterCustomFunctions(value: string): GenericModel[] {
    const filterValue = value.toLowerCase();
    return this.customFunctions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterFixedFunctions(value: string): GenericModel[] {
    const filterValue = value.toLowerCase();
    return this.fixedFunctions.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  clearValues() {
    this.newExpression = '';
  }

  addValue(value: string) {
    this.customFunctionsControl.setValue('');
    this.fixedFunctionsControl.setValue('');
    this.variablesControl.setValue('');
    this.newExpression += value;
  }

  cancel() {
    this.cancelEvent.emit(true);
  }

  submit() {
    this.submitEvent.emit(this.newExpression);
  }
}

