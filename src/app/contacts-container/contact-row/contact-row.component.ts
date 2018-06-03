import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.scss']
})
export class ContactRowComponent implements OnInit {
  @Input() contact

  constructor () { }

  ngOnInit () {
  }

}
