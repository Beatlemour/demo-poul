import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { TestTableComponent } from './test-table/test-table.component';
import { HomeComponent } from './home/home.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TestTableParentComponent } from './test-table-parent/test-table-parent.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SettingsComponent } from './settings/settings.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTableComponent,
    HomeComponent,
    MainMenuComponent,
    QuotesComponent,
    TestTableParentComponent,
    DialogExampleComponent,
    SettingsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
