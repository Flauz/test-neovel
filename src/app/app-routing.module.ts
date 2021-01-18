import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component"
import { BookComponent } from "./book/book.component"
import { ChapterBookComponent } from "./chapter-book/chapter-book.component"
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: "dashboard", component: DashboardComponent
  },
  { path: "book/:id", component: BookComponent },
  { path: "chapters/:id", component: ChapterBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
