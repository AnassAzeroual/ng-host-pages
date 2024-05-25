import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSegmentationComponent } from './image-segmentation.component';
import { ImageSegmentationRoutingModule } from './image-segmentation-routing.module';



@NgModule({
  declarations: [
    ImageSegmentationComponent
  ],
  imports: [
    CommonModule,
    ImageSegmentationRoutingModule
  ]
})
export class ImageSegmentationModule { }
