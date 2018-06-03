import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styleUrls: ['./contacts-container.component.scss']
})
export class ContactsContainerComponent implements OnInit {
  public query: string

  contacts = Array(10000).fill(0).map((item, index) => {
    return {
      name: `User ${index}`,
      phone: `+357 99 ${this._padDigits(Math.floor(Math.random() * 999999).toString(), 6)}`,
      age: Math.floor(Math.random() * 99)
    }
  })

  constructor () {
  }

  ngOnInit () {
  }

  private _padDigits (number, length) {
    return number.length < length
      ? number.padStart(length, '0')
      : number
  }

}
