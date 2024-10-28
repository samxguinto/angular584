import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { CountryPopulation } from './CountryPopulation';

@Component({
  selector: 'app-country-population',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent implements OnInit { 
  id: number = -1;
  public countryPopulation!: CountryPopulation;
  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = idParam ? + idParam : -1;
    this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/CountryPopulation/${this.id}`).subscribe(
      {
        next: result => this.countryPopulation = result,
        error: e => console.log(e),
      }
    )
  }

}
