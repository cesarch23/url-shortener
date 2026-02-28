import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LinkService } from '../../service/link.service';
import { LinkDTO } from '../../../core/model/model.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { ToastService } from '../../../core/service/toast.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { LinkDialogComponent } from '../../component/link-dialog/link-dialog.component';

@Component({
  selector: 'app-links',
  imports: [
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltip,
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent implements OnInit, AfterViewInit {
  private linkService = inject(LinkService);
  private toastService = inject(ToastService);
  private dialog = inject(MatDialog);
  today: Date = new Date();
  isLoading: boolean = false;
  hasError: boolean = false;
  totalLinks: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [10, 15, 20];

  dataSource: MatTableDataSource<LinkDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['info', 'state', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadLinks(this.pageIndex, this.pageSize);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  public loadLinks(pageIndex: number, pageSize: number) {
    this.isLoading = true;
    this.linkService.getLinksByUserId(pageIndex, pageSize).subscribe({
      next: (page) => {
        console.log(page);
        this.isLoading = false;

        this.dataSource.data = page.content;
        this.totalLinks = page.totalElements;
        this.pageIndex = page.number;
        this.pageSize = page.size;
      },
      error: (error) => {
        console.log(error);
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  onPageChange(event: PageEvent): void {

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log({totalLinks:this.totalLinks,size: this.pageSize})
    this.loadLinks(event.pageIndex, event.pageSize);
  }
  isExpired(expiredDateStr: string): boolean {
    const today = new Date();
    const expired = new Date(expiredDateStr);
    return expired < today;
  }
  public async copyShorLink(shorLink: string) {
    try {
      await navigator.clipboard.writeText(shorLink);
      this.toastService.showToast({
        message: 'Enlace copiado al portapapeles',
        type: 'info',
        horizontalPosition: 'center',
        duration: 2000,
      });
    } catch (error) {
      this.toastService.showToast({
        message: 'No se pudo copiar al portapapeles',
        type: 'error',
      });
    }
  }
  public openLinkDialog(){
    const dialogRef = this.dialog.open(LinkDialogComponent,{
      width: '400px',
      data: {
        update: false
      }
    })
  }
}
