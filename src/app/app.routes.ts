import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { StudentComponent } from "./student.component";
import { ProfileComponent } from "./profile.component";


const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'student', component: StudentComponent },
     { path: 'student/profile/:id', component: ProfileComponent }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
