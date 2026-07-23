import { Routes } from '@angular/router';
import { Two } from './two/two';
import { One } from './one/one';

export const routes: Routes = [
  { path: '1', component: One },
  { path: '2', component: Two },
];
