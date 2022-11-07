import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
declare var require: any;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import jsPDF from 'jspdf';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-get-certificate',
  templateUrl: './get-certificate.component.html',
  styleUrls: ['./get-certificate.component.css']
})
export class GetCertificateComponent implements OnInit {
  @ViewChild('content', {static:false}) el!: ElementRef
  
  generatePDF() {
    let pdf = new jsPDF()
 
    pdf.html(this.el.nativeElement,{
      callback:(pdf) => {
        pdf.save("certificate.pdf")
      }
    })
  }
  currentUser: any;
  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
