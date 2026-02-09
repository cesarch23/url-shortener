import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'dashboard-sidebar',
  imports: [
    CommonModule,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink
],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss'
})
export class DashboardSidebarComponent {
  isCollapsed = true;

  navItems: NavItem[] = [
    { label: 'Home', icon: 'home', route: '/dashboard/home' },
    { label: 'Links', icon: 'link', route: '/dashboard/links' },
    { label: 'Analyticas', icon: 'bar_chart', route: '/dashboard/analytics' }
  ];

  constructor(private router: Router) {}

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}
