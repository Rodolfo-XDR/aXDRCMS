import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/models/menuItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habbo',
  templateUrl: './habbo.component.html',
  styleUrls: ['./habbo.component.scss']
})
export class HabboComponent implements OnInit {

  constructor(private router : ActivatedRoute) {     
  }

  ngOnInit() {
  }

}
