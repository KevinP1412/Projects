import { Component ,Input,OnInit,EventEmitter,Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  @Input() message: any;

 @Input() cities : any;

@Output() parentMessage: EventEmitter<string>=new EventEmitter();
messageToParent='Data from child to parent';



constructor(){}
  ngOnInit(): void {
}
OnClick()
  {
    this.parentMessage.emit(this.messageToParent);
  }
   showMsg()  {
 return 'I am a child component!';
   }
 

}
