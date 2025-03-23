import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  stateForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public confirmData: any
  ) {
    this.stateForm = this.fb.group({
      name: ['', Validators.required],
      admin: ['', Validators.required],
    });
  }

  onAction() {
    if (this.stateForm.valid) {
      console.log('Form Submitted:', this.stateForm.value);
    }
  }
}
