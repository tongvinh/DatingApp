import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})

export class TextInputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() type = 'text';

  constructor(@Optional() // Add this decorator
  @Self()
  public ngControl: NgControl) {
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }

}
