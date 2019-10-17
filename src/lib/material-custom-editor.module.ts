import { NgModule } from '@angular/core';
import { MaterialCustomEditorComponent } from './material-custom-editor.component';
import { MaterialCustomEditorService } from './material-custom-editor.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// Custom components
import { TranslatePipe } from './translate/translate.pipe';

@NgModule({
  declarations: [MaterialCustomEditorComponent, TranslatePipe],
  providers: [MaterialCustomEditorService],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [MaterialCustomEditorComponent]
})
export class MaterialCustomEditorModule { }
