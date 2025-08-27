import { Routes } from '@angular/router';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';

export const routes: Routes = [
    { path: "page-a", component:PageAComponent},
    { path: "page-b", component:PageBComponent}
];
