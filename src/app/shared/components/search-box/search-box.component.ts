import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public onNewValue: EventEmitter<string> = new EventEmitter();

  onNewInputValue(value: string): void {
    console.log({ value });
    this.onNewValue.emit(value);
  }
}
