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
import { AuthService } from '../../../core/service/auth.service';
import { MatTooltip } from '@angular/material/tooltip';
import { ToastService } from '../../../core/service/toast.service';

@Component({
  selector: 'app-links',
  imports: [
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent implements OnInit, AfterViewInit {
  private linkService = inject(LinkService);
  private toastService = inject(ToastService);
  today: Date = new Date();
  isLoading: boolean = false;
  hasError: boolean = false;
  totalLinks: number = 0;
  pageSize: number = 3;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [3, 5, 10];

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
    console.log('🔄 Cambio de paginación:', {
      paginaAnterior: event.previousPageIndex,
      paginaNueva: event.pageIndex,
      tamañoAnterior: this.pageSize,
      tamañoNuevo: event.pageSize,
    });

    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadLinks(event.pageIndex, event.pageSize);
  }
  isExpired(expiredDateStr: string): boolean {
    const today = new Date();
    const expired = new Date(expiredDateStr);

    // quitar hora
    // today.setHours(0, 0, 0, 0);
    // expired.setHours(0, 0, 0, 0);

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
}
