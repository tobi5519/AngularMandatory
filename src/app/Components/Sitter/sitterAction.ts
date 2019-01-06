import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../../store';
import { Sitter } from '../../Entities/Sitter';
import { ApiService } from '../../Service/api/api.service';


@Injectable({
  providedIn: 'root'
})
// This class is an action creator.
export class SittersActions {

  // We dependency inject the redux library.
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private apiService: ApiService) {
  }



}
