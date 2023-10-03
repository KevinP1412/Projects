import { Component ,ElementRef,OnInit,ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
massageToChild="data from parent to child!";

messageFromChild!:string;
message!:string;

 citiesArr = ['Kolhapur','Pune','Mumbai','Nagpur'];

 @ViewChild(ChildComponent) child!:ChildComponent;

 @ViewChild('heading') heading!: ElementRef;


constructor(){}

 ngOnInit(): void {
  }
  ngAfterViewInIt()
 {
  this.heading.nativeElement.style.color = 'red';
    console.log(this.child)
    this.message = this.child.showMsg();
}
  captureData(data:string){
    this.messageFromChild=data;
  }

}
