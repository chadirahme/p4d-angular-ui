import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const MATERIAL_MODULES = [
    MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
]

@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES,
})
export class MaterialModule {}