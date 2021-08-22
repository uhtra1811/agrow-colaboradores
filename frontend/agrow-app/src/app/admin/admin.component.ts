import { AfterViewInit, Component, EventEmitter, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  @Input() opened1 = false;


  @Input() opened: any = false;
  mostrarMenu: boolean = true;

  constructor(private router: Router) {}
 
  ngOnInit(): void {
  }

  fazerLogout(){
    this.router.navigate(['login']);
  }
  
  toggleSidebar(opened: any){
    console.log(this.opened);
    this.opened= !this.opened;

  } 
console(){
  console.log(this.opened);
}


}

