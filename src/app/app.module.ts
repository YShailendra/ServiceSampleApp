import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomsortPipe } from './pipes/customsort.pipe';
import { ServiceComponent } from './components/service/service.component';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from './routing/routing.module';
import { LoginService } from './services/login.service';
import { ProductService } from './services/product.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    CustomsortPipe,
    ServiceComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [LoginService,ProductService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
