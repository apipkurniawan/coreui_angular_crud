import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: `
    <p-toast></p-toast>
    <p-toast position="top-left" key="tl"></p-toast>
    <p-toast position="top-center" key="tc"></p-toast>
    <p-toast position="bottom-center" key="bc"></p-toast>

    <!-- <p-toast
      position="bottom-center"
      key="c"
      (onClose)="onReject()"
      [baseZIndex]="5000"
    >
      <ng-template let-message pTemplate="message">
        <div class="p-flex p-flex-column" style="flex: 1">
          <div class="p-text-center">
            <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
            <h4>{{ message.summary }}</h4>
            <p>{{ message.detail }}</p>
          </div>
          <div class="p-grid p-fluid">
            <div class="p-col-6">
              <button
                type="button"
                pButton
                (click)="onConfirm()"
                label="Yes"
                class="p-button-success"
              ></button>
            </div>
            <div class="p-col-6">
              <button
                type="button"
                pButton
                (click)="onReject()"
                label="No"
                class="p-button-secondary"
              ></button>
            </div>
          </div>
        </div>
      </ng-template>
    </p-toast>

    <div class="card">
      <h5>Severities</h5>
      <button
        type="button"
        pButton
        pRipple
        (click)="showSuccess()"
        label="Success"
        class="p-button-success"
      ></button>
      <button
        type="button"
        pButton
        pRipple
        (click)="showInfo()"
        label="Info"
        class="p-button-info"
      ></button>
      <button
        type="button"
        pButton
        pRipple
        (click)="showWarn()"
        label="Warn"
        class="p-button-warning"
      ></button>
      <button
        type="button"
        pButton
        pRipple
        (click)="showError()"
        label="Error"
        class="p-button-danger"
      ></button>

      <h5>Positions</h5>
      <button
        type="button"
        pButton
        pRipple
        (click)="showTopLeft()"
        label="Top Left"
      ></button>
      <button
        type="button"
        pButton
        pRipple
        (click)="showTopCenter()"
        label="Top Center"
        class="p-button-warning"
      ></button>
      <button
        type="button"
        pButton
        pRipple
        (click)="showBottomCenter()"
        label="Bottom Center"
        class="p-button-success"
      ></button>

      <h5>Multiple</h5>
      <button
        type="button"
        pButton
        pRipple
        (click)="showMultiple()"
        label="Multiple"
        class="p-button-warning"
      ></button>
      <button
        type="button"
        pButton
        pRipple
        (click)="showSticky()"
        label="Sticky"
      ></button>

      <h5>Clear</h5>
      <button
        type="button"
        pButton
        pRipple
        (click)="clear()"
        icon="pi pi-times"
        label="Clear"
      ></button>

      <h5>Template</h5>
      <button
        type="button"
        pButton
        pRipple
        (click)="showConfirm()"
        label="Confirm"
        class="ui-button-warning"
      ></button>
    </div> -->
    <router-outlet></router-outlet>
  `,
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  title = 'CoreUI Free Angular Admin Template';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }

  // showSuccess() {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Success',
  //     detail: 'Message Content',
  //   });
  // }

  // showInfo() {
  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'Info',
  //     detail: 'Message Content',
  //   });
  // }

  // showWarn() {
  //   this.messageService.add({
  //     severity: 'warn',
  //     summary: 'Warn',
  //     detail: 'Message Content',
  //   });
  // }

  // showError() {
  //   this.messageService.add({
  //     severity: 'error',
  //     summary: 'Error',
  //     detail: 'Message Content',
  //   });
  // }

  // showTopLeft() {
  //   this.messageService.add({
  //     key: 'tl',
  //     severity: 'info',
  //     summary: 'Info',
  //     detail: 'Message Content',
  //   });
  // }

  // showTopCenter() {
  //   this.messageService.add({
  //     key: 'tc',
  //     severity: 'info',
  //     summary: 'Info',
  //     detail: 'Message Content',
  //   });
  // }

  // showBottomCenter() {
  //   this.messageService.add({
  //     key: 'bc',
  //     severity: 'info',
  //     summary: 'Info',
  //     detail: 'Message Content',
  //   });
  // }

  // showConfirm() {
  //   this.messageService.clear();
  //   this.messageService.add({
  //     key: 'c',
  //     sticky: true,
  //     severity: 'warn',
  //     summary: 'Are you sure?',
  //     detail: 'Confirm to proceed',
  //   });
  // }

  // showMultiple() {
  //   this.messageService.addAll([
  //     { severity: 'info', summary: 'Message 1', detail: 'Message Content' },
  //     { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
  //     { severity: 'info', summary: 'Message 3', detail: 'Message Content' },
  //   ]);
  // }

  // showSticky() {
  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'Sticky',
  //     detail: 'Message Content',
  //     sticky: true,
  //   });
  // }

  // onConfirm() {
  //   this.messageService.clear('c');
  // }

  // onReject() {
  //   this.messageService.clear('c');
  // }

  // clear() {
  //   this.messageService.clear();
  // }
}
