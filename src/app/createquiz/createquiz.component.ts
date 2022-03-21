import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css','./createquiz.component.scss']
})
export class CreatequizComponent implements OnInit {

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    {
     
     
    }
  `;
   
    this._renderer2.appendChild(this._document.body, script);
    
  }

}
