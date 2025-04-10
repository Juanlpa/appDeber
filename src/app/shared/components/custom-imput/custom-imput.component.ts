import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldAppearance, MatFormFieldModule} from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'jlop-custom-imput',
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './custom-imput.component.html',
  styleUrl: './custom-imput.component.css'
})
export class CustomImputComponent {
  @Input() appearance!:MatFormFieldAppearance
  @Input() label!:string
  @Input() type!:string
  @Input() required!:boolean
  @Input() placeholder!:string
  @Input() control!:FormControl
  @Input() icon!:string
}
