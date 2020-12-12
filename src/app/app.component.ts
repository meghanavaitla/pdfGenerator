import { Component } from '@angular/core';
import {DataService} from './data.service';
import  jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdfGenerator';
  sample;
  constructor(private data:DataService) { }

   ngOnInit() {
    this.data.getSample().subscribe(d=>{
      this.sample=d;

      console.log('id'+this.sample.article_type);
    });
  }
  download(){
    var ele=document.getElementById('table');
    html2canvas(ele).then((canvas)=>
    {
      console.log(canvas);
      var imgData= canvas.toDataURL('img/png')
      var doc= new jspdf()
      var imgHeight= canvas.height * 208 /canvas.width;

      doc.addImage(imgData,0,0,208,imgHeight)
      doc.save('MyPDF.pdf')
    })
  }
}
