import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageSegmentationComponent } from './image-segmentation.component';

const routes: Routes = [
  { path: '', component: ImageSegmentationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageSegmentationRoutingModule { }
