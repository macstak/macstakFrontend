import { Component, OnInit } from '@angular/core';
import { PDFDocument, rgb, degrees } from 'pdf-lib';
import { saveAs } from 'file-saver';

// @ts-ignore
import fontkit from '@pdf-lib/fontkit';

@Component({
  selector: 'app-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrls: ['./certificate-page.component.scss'],
})
export class CertificatePageComponent implements OnInit {
  constructor() {}

  studentName: any;

  ngOnInit(): void {}

  generatePDF = async (name: any) => {
    if (!this.studentName) {
      alert('Please Give your Name');
      return;
    }

    const existingPdfBytes = await fetch(
      'https://mr-man7352.github.io/loginPage/cert.pdf'
    ).then((res) => res.arrayBuffer());

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    //get font
    const fontBytes = await fetch(
      'https://mr-man7352.github.io/loginPage/Sanchez-Regular.ttf'
    ).then((res) => res.arrayBuffer());

    // Embed our custom font in the document
    const SanChezFont = await pdfDoc.embedFont(fontBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Draw a string of text diagonally across the first page
    firstPage.drawText(this.studentName, {
      x: 280,
      y: 330,
      size: 58,
      font: SanChezFont,
      color: rgb(0.2, 0.84, 0.67),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log('Done creating');

    // this was for creating uri and showing in iframe

    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("pdf").src = pdfDataUri;

    var file = new File([pdfBytes], 'webDev.pdf', {
      type: 'application/pdf;charset=utf-8',
    });
    saveAs(file);
  };
}
