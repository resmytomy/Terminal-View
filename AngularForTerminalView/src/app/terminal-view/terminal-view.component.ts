import { Component, OnInit } from '@angular/core';
import { TermnalViewService } from '../service/terminal-view.service';

@Component({
  selector: 'app-file-editor',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.scss']
})
export class TerminalViewComponent {

  constructor(private service: TermnalViewService) {}
  previousCommands:string[]=[];
  result:any;
  command:string;
  
 
  loading: boolean = false;
  errorMessage
  ngOnInit(): void {
     
   }
 
  executeCommand(command) {
    this.previousCommands.push(command);
    console.log('inside update')
    this.service.updateFileContents(command)
    .subscribe(
      (response) => {                          
        console.log('response received'+response)
      
        console.log(response);
       // window.alert("Updated Sucessfully");
        this.result=response;
       
      },
      (error) => {                
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
      },
      )
  }
copy(cmd){
  this.command=cmd;
}
 
}
