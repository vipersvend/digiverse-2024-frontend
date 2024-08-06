import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxScannerQrcodeModule, LOAD_WASM, ScannerQRCodeResult, NgxScannerQrcodeComponent, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles, NgxScannerQrcodeService } from 'ngx-scanner-qrcode';
import { HeaderComponent } from '../header/header.component'
import { StatsComponent } from '../stats/stats.component'

@Component({
  selector: 'app-qrdashboard',
  standalone: true,
  imports: [NgxScannerQrcodeModule, CommonModule, HeaderComponent, StatsComponent],
  templateUrl: './qrdashboard.component.html',
  styleUrl: './qrdashboard.component.css'
})
export class QrdashboardComponent implements  AfterViewInit{

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#front_and_back_camera
  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth
      },
    },
    isBeep: false,
  };

  @ViewChild('action') action!: NgxScannerQrcodeComponent;

  constructor(private qrcode: NgxScannerQrcodeService) { }

  ngAfterViewInit(): void {
    this.action.isReady.subscribe((res: any) => {
      // this.handle(this.action, 'start');
    });
  }

  public onEvent(e: ScannerQRCodeResult[], action?: any): void {
    // e && action && action.pause();
    if(e.length){
      console.log(e[0].value)
    }
  }

  public handle(action: any, fn: string): void {
    const playDeviceFacingBack = (devices: any[]) => {
      // front camera or back camera check here!
      const device = devices.find(f => (/back|rear|environment/gi.test(f.label))); // Default Back Facing Camera
      action.playDevice(device ? device.deviceId : devices[0].deviceId);
    }

    if (fn === 'start') {
      action[fn](playDeviceFacingBack).subscribe((r: any) => console.log(fn, r), alert);
    } else {
      action[fn]().subscribe((r: any) => console.log(fn, r), alert);
    }
  }

}
