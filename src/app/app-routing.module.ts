import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './old-components/page-not-found/page-not-found.component';
// import { EmployeeListComponent } from './old-components/employee-list/employee-list.component';
// import { DepartmentListComponent } from './old-components/department-list/department-list.component';
// import { DepartmentDetailComponent } from './old-components/department-detail/department-detail.component';
// import { LoginComponent } from './old-components/login/login.component';
// import { RandomComponent } from './old-components/random/random.component';
// import { TableComponent } from './old-components/table/table.component';
// import { DemoComponent } from './demo/demo.component';
// import { NavbarComponent } from './component/navbar/navbar.component';
// import { CountriesComponent } from './component/countries/countries.component';
// import { HomeComponent } from './component/home/home.component';
// import { PyhomeComponent } from './python/pyhome/pyhome.component';
// import { PyloginComponent } from './python/pylogin/pylogin.component';
// import { AboutComponent } from './python/about/about.component';
// import { InboxComponent } from './python/inbox/inbox.component';

// revise components
// import { RegComponent } from './revise/reg/reg.component';
// import { OginComponent } from './revise/ogin/ogin.component';
// import { OmeComponent } from './revise/ome/ome.component';
// import { AddComponent } from './revise/add/add.component';

//VOXELUP
// import { NavbarComponent } from './voxelup/navbar/navbar.component';
// import { TrialComponent } from './voxelup/trial/trial.component';
// import { Trial2Component } from './voxelup/trial2/trial2.component';
// import { SequenceComponent } from './voxelup/sequence/sequence.component';
// import { ProductsComponent } from './voxelup/products/products.component';
// import { Sec1Component } from './voxelup/sec1/sec1.component';
// import { Sec2Component } from './voxelup/sec2/sec2.component';
// import { Sec3Component } from './voxelup/sec3/sec3.component';
// import { Sec4Component } from './voxelup/sec4/sec4.component';
// import { Sec5Component } from './voxelup/sec5/sec5.component';
// import { Sec6Component } from './voxelup/sec6/sec6.component';
// import { Sec7Component } from './voxelup/sec7/sec7.component';
// import { TeamComponent } from './voxelup/team/team.component';
// import { ContactComponent } from './voxelup/contact/contact.component';

//ecommerce
import { HeaderComponent } from './ecommerce/shared/header/header.component';
import { FooterComponent } from './ecommerce/shared/footer/footer.component';
import { NavComponent } from './ecommerce/shared/nav/nav.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { HomeComponent } from './ecommerce/home/home.component';
import { FiltersComponent } from './ecommerce/shopping-cart/filters/filters.component';
import { ProductListComponent } from './ecommerce/shopping-cart/product-list/product-list.component';
import { CartComponent } from './ecommerce/shopping-cart/cart/cart.component';
import { TryComponent } from './ecommerce/components/try/try.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'departments', component: DepartmentListComponent },
  // { path: 'departments/:id', component: DepartmentDetailComponent },
  // { path: 'employees', component: EmployeeListComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'random', component: RandomComponent },
  // { path: 'table', component: TableComponent },

  // { path: 'demo', component: DemoComponent },
  // { path: 'nav', component: NavbarComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'countries', component: CountriesComponent },

  // { path: 'pyhome', component: PyhomeComponent },
  // { path: 'pylogin', component: PyloginComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'inbox', component: InboxComponent }
  

  // voxelup
  // { path: 'nav', component: NavbarComponent },
  // { path: 'trial', component: TrialComponent },
  // { path: 'trial2', component: Trial2Component },
  // { path: 'seq', component: SequenceComponent },
  // { path: 'products', component: ProductsComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'contact', component: ContactComponent },


  
  
 //ecommerce
{ path: 'nav', component: NavComponent },
{ path: 'header', component: FooterComponent },
{ path: 'footer', component: NavComponent },
{ path: 'shopping', component: ShoppingCartComponent },
{ path: 'home', component: HomeComponent },
{ path: 'cart', component: CartComponent },


{ path: 'try', component: TryComponent },





  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailComponent, LoginComponent, RandomComponent, TableComponent, DemoComponent, NavbarComponent, CountriesComponent, HomeComponent, PyhomeComponent, PyloginComponent, AboutComponent, InboxComponent, RegComponent, OginComponent, OmeComponent, AddComponent] 
//voxelup
//  export const routingComponents = [ NavbarComponent, TrialComponent, Trial2Component, SequenceComponent, ProductsComponent, Sec1Component, Sec2Component, Sec3Component, Sec4Component, Sec5Component, Sec6Component, Sec7Component, TeamComponent, ContactComponent ]

//ecommerce
export const routingComponents = [ NavComponent, HeaderComponent, FooterComponent, NavComponent, ShoppingCartComponent, HomeComponent,  FiltersComponent, ProductListComponent, CartComponent, TryComponent]