import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var textarea = document.getElementById("edit-sobremi");
    if (textarea) {
      textarea.addEventListener('keyup', (e) => {
        if (e.key == "Enter") {
          textarea!.style.display="none"
        }
      });
    }
  }
}
