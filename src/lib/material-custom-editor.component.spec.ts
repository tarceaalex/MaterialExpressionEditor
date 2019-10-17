import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCustomEditorComponent } from './material-custom-editor.component';

describe('MaterialCustomEditorComponent', () => {
  let component: MaterialCustomEditorComponent;
  let fixture: ComponentFixture<MaterialCustomEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCustomEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCustomEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
