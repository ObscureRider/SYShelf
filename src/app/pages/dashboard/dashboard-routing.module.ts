import {Route} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

export const DASHBOARD_ROUTE: Route = {
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      redirectTo: 'analytics',
      pathMatch: 'full'
    },
    {
      path: 'analytics', // Default
      loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
    },
    {
      path: 'notifications',
      loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
    },
    {
      path: 'reports',
      loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
    }
  ]
};

/*
...['analytics', ''].map(path => ({
      path,
      loadChildren: () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
    })),
*/
