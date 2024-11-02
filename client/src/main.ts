import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CvComponent } from './app/cv/cv.component';

// Définir les routes, avec CvComponent comme route principale
const routes: Routes = [
    { path: '', component: CvComponent },  // Route de la page d'accueil
    { path: '**', redirectTo: '' }          // Rediriger les URL non trouvées vers l'accueil
];

// Bootstraper l'application avec AppComponent et les routes
bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
}).catch(err => console.error(err));
