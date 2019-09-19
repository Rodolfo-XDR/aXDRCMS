import { Component, OnInit } from '@angular/core';
declare var Metro;

@Component({
  selector: 'app-acp',
  templateUrl: './acp.component.html',
  styleUrls: ['./acp.component.css']
})
export class AcpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let options = {
        showTop: true,
        timeout: 3000
    }
    let toast = Metro.toast.create;
    toast("Bienvenido al panel administrativo de <b>arcticXDR</b>", null, null, "secondary", options);
  }

}
