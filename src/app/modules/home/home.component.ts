import { Component, inject } from '@angular/core';
import { MenuBarComponent } from '../common/menu-bar/menu-bar.component';
import { DockBarComponent } from '../common/dock-bar/dock-bar.component';
import { ImageWidgetComponent } from '../common/widgets/image-widget/image-widget.component';
import { WeatherWidgetComponent } from '../common/widgets/weather-widget/weather-widget.component';
import { NotesWidgetComponent } from '../common/widgets/notes-widget/notes-widget.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogsComponent } from '../common/dialogs/folder-dialog/dialogs.component';
import { PdfDialogComponent } from '../common/dialogs/pdf-dialog/pdf-dialog.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuBarComponent, DockBarComponent, ImageWidgetComponent, WeatherWidgetComponent, NotesWidgetComponent, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dialog = inject(MatDialog);

  ngOnInit(): void {
    this.onClickDesktopIcon('pdf');
  }

  onClickDesktopIcon(source:string){
    if(source === 'pdf'){
      const dialogRef = this.dialog.open(PdfDialogComponent, {
        data: {
          'name': source,
        },
        panelClass: ['mac-folder-dialog', 'left-aligned-dialog'],
        width: '60%',
        hasBackdrop: false
      });
    }else{
      const dialogRef = this.dialog.open(DialogsComponent, {
        data: {
          'name': source,
        },
        panelClass: ['mac-folder-dialog'],
        width: '60%',
        hasBackdrop: false
      });
    }

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
