import { AfterViewInit, Component, EventEmitter, Input} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements AfterViewInit {

  @Input() opened = false;
  @Input() opened1 = false;
  mostrarMenu: boolean = true;

  constructor(private router: Router) {}
 
  ngAfterViewInit(): void {
  }

  fazerLogout(){
    this.router.navigate(['login']);
  }
  
  toggleSidebar(){
    console.log(this.opened);
    this.opened = !this.opened;
    this.opened1 = !this.opened1;
  } 



}

