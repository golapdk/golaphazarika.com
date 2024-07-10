import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-dialog',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './pdf-dialog.component.html',
  styleUrl: './pdf-dialog.component.scss'
})
export class PdfDialogComponent {

  isMinimized = false;
  isMaximized = false;
  constructor(public dialogRef: MatDialogRef<PdfDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  minimize(): void {
    this.isMinimized = !this.isMinimized;
  }

  maximize(): void {
    this.isMaximized = !this.isMaximized;
    if (this.isMaximized) {
      this.dialogRef.updateSize('100vw', '88vh');
      document.querySelector('.mac-folder-dialog')!.classList.add('custom-maximized');
      document.querySelector('.mac-folder-dialog')!.classList.remove('left-aligned-dialog');
    } else {
      this.dialogRef.updateSize('60%', '80vh');
      document.querySelector('.mac-folder-dialog')!.classList.add('left-aligned-dialog');
      document.querySelector('.mac-folder-dialog')!.classList.remove('custom-maximized');

    }
  }
}
