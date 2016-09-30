import { Directive } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core/src/metadata/directives';

/*
 * The Bootstrap drop down menus in the navigation bar have their own JavaScript,
 * but it's not being used, and instead the events are handled in this Directive
 * to demonstrate how it's done with Angular2.
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }
  private isOpen: boolean = false;
}
