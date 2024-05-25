import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-segmentation',
  templateUrl: './image-segmentation.component.html',
  styleUrls: ['./image-segmentation.component.scss']
})
export class ImageSegmentationComponent {
  imageSrc = './assets/jae-house-fly-pest.jpg';
  @ViewChild('imageCanvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  private rectangles = [
    { x: 280, y: 60, width: 550, height: 400 },
    // { x: 200, y: 150, width: 80, height: 120 }
  ];


  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.loadAndDrawImage();
  }

  private loadAndDrawImage() {
    const img = new Image();
    img.src = this.imageSrc;
    img.onload = () => {
      this.canvas.nativeElement.width = img.width;
      this.canvas.nativeElement.height = img.height;
      this.ctx.drawImage(img, 0, 0);
      this.drawRectangles();
    };
  }

  private drawRectangles() {
    this.ctx.strokeStyle = 'pink';
    this.ctx.lineWidth = 2;
    this.rectangles.forEach(rect => {
      this.ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
  }
}
