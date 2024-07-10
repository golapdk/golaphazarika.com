import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.scss'
})
export class DialogsComponent {
  isMinimized = false;
  isMaximized = false;

  constructor(public dialogRef: MatDialogRef<DialogsComponent>) {}

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
      this.dialogRef.updateSize('600px', '400px');
      document.querySelector('.mac-folder-dialog')!.classList.add('left-aligned-dialog');
      document.querySelector('.mac-folder-dialog')!.classList.remove('custom-maximized');

    }
  }
}
