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
  pred= ""
  fileUrl = ""

  constructor(private http: HttpClient) {}

  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];//[0] To select the first file which is uploaded by user.
    this.fileUrl = URL.createObjectURL(this.selectedFile)
    console.log(this.selectedFile);
  }
  
  onUpload()
  {
    let fd = new FormData();
    fd.append('video',this.selectedFile);
    fd.append("test", "test");
    console.log(this.selectedFile);
    console.log(fd.getAll("video"))
    this.http.post('http://127.0.0.1:5000/lip-read' , fd,{
      reportProgress: true,
      observe: 'events'
    })//insert url of the l;ocation where you want to upload the video
    .subscribe(event =>{
      if (event.type === HttpEventType.UploadProgress) {
        console.log('UploadProgress: ' + event.loaded /event.total * 100 + 'percent')
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
        this.pred = event.body["pred"]
      }
      // console.log(event);
    });
  }  
}
