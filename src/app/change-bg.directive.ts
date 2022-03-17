import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  constructor(private el:ElementRef,private render:Renderer2) { }
  @HostListener("click") changebd()
  {
    this.render.setStyle(this.el.nativeElement,"background","#fb246a");
    this.render.setStyle(this.el.nativeElement,"color","#fff");
    this.render.setStyle(this.el.nativeElement,"border","2 px solid grey");
  }
}
