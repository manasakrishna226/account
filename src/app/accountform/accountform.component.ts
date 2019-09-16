import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Countries} from '../countries';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.component.html',
  styleUrls: ['./accountform.component.css']
})
export class AccountformComponent implements OnInit, AfterViewInit {
  disabledValue = false;
  cities: [];

  x;
  time;
  fenable;
  calltimer;
  selectstate = '-1';
  selectcity = '-2';


  statelist: Countries[] = [{name: 'karnataka', cities: ['Bangalore', 'Mangalore', 'udupi']},
    {name: 'Andhrapradesh', cities: ['Vijayawada', 'Guntur', 'Nellore']},
    {name: 'Tamilnadu', cities: ['Chennai', 'Madurai', 'Vellore']},
    {name: 'Kerala', cities: ['Thiruvananthapuram', 'Palakkad', 'Thrissur']}
  ];
  @ViewChild('formdata', {static: true}) private formhandler: NgForm;

  getcounter() {

    const countDownDate = new Date().getTime() + (5 * 60 * 1000);

    this.x = setInterval(() => {

      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.time = (minutes + 'm' + '  :  ' + seconds + 's');
      console.log('time is', this.time);

      console.log(days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's');


      if (distance <= 0 && this.formhandler.touched) {
        this.time = '0m : 0s';
        clearInterval(this.x);
        this.disabledValue = false;
        console.log('EXPIRED');

      } else if (distance <= 0 && this.formhandler.untouched) {
        this.time = '0m : 0s';
        this.disabledValue = true;
        clearInterval(this.x);
        setTimeout(this.formenable, 1000);


        console.log('EXPIRED');
      }

    }, 1000);
  }


  constructor() {

  }


  ngOnInit() {
    this.getcounter();


  }

  onsubmit(formdata: NgForm) {
    this.formhandler.reset();
    setTimeout(() => {alert('your form is submitted'); },  1000);


  }

  formenable() {
this.fenable = confirm('press ok to enter the values in the form');
if (this.fenable === true) {
  window.location.reload();

}
  }

  changestate(state) {
    this.cities = this.statelist.find(s => s.name === state).cities;
  }

  ngAfterViewInit(): void {

  }
}
