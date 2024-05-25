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
      this.drawGridOverlay();
      this.drawRectangles();
    };
  }

  private drawGridOverlay() {
    const gridSize = 20; // Size of the grid cells
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'; // Light gray grid lines
    this.ctx.lineWidth = 1;

    for (let x = 0; x < this.canvas.nativeElement.width; x += gridSize) {
      for (let y = 0; y < this.canvas.nativeElement.height; y += gridSize) {
        // Check if the current grid cell overlaps with any rectangle
        if (!this.isInsideAnyRectangle(x, y, gridSize, gridSize)) {
          this.ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }
    }
  }

  private isInsideAnyRectangle(x: number, y: number, width: number, height: number): boolean {
    return this.rectangles.some(rect => 
      x < rect.x + rect.width && x + width > rect.x &&
      y < rect.y + rect.height && y + height > rect.y
    );
  }

  private drawRectangles() {
    this.ctx.strokeStyle = 'pink';
    this.ctx.lineWidth = 2;
    this.rectangles.forEach(rect => {
      this.ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
    });
  }
}
