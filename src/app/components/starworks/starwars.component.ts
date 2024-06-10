import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/product.service'; 
import { StarworksInterfaces } from '../../interfaces/starworks.interfaces';

@Component({
  selector: 'app-starwars',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'] 
})
export class StarwarsComponent implements OnInit {

  starworksList: StarworksInterfaces[] = [];
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getStarworks();
  }

  getStarworks(): void {
    this.apiService.getstarworks().subscribe({
      next: (result: { results: StarworksInterfaces[]; }) => {
        this.starworksList = result.results; 
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  calculatePageIndexes(): [number, number] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.starworksList.length);
    return [startIndex, endIndex];
  }
  nextPage() {
    const totalPages = Math.ceil(this.starworksList.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
