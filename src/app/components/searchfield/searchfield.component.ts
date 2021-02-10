import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/shared/services/provider.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.css']
})
export class SearchfieldComponent implements OnInit {

  url: string = '';
  moviesArray: string[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit(): void {
  }

}
