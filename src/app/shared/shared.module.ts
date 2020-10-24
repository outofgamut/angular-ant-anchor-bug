import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzGridModule } from 'ng-zorro-antd/grid';

const AntModules = [
  NzLayoutModule,
  NzMenuModule,
  NzAnchorModule,
  NzBreadCrumbModule,
  NzGridModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollingModule,
    ...AntModules
  ],
  exports: [
    ...AntModules
  ]
})
export class SharedModule { }
