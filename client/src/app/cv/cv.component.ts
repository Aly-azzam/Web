import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cv',
    standalone: true,
    imports: [CommonModule, HttpClientModule],  // Ajoutez CommonModule pour ngIf et HttpClientModule pour les requêtes HTTP
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
    cvData: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.fetchCVData();
    }

    fetchCVData() {
        this.http.get('http://localhost:3001/api/cv')
            .subscribe(data => {
                this.cvData = data;
            }, error => {
                console.error('Erreur lors de la récupération des données CV :', error);
            });
    }
}
