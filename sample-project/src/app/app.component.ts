import { Component } from '@angular/core';
import { Session } from 'protractor';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';
  username = "";
  public _username: Session;
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];//[0] To select the first file which is uploaded by user.
  }
  
  onUpload()
  {
    const fd = new FormData();
    fd.append('video',this.selectedFile, this.selectedFile.name)
    this.http.post('' , fd,{
      reportProgress: true,
      observe: 'events'
    })//insert url of the l;ocation where you want to upload the video
    .subscribe(event =>{
      if (event.type === HttpEventType.UploadProgress) {
        console.log('UploadProgress: ' + event.loaded /event.total * 100 + 'percent')
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
      console.log(event);
    });
  }  
}
