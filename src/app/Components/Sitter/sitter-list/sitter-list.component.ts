import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sitter} from '../../../Entities/Sitter';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.css']
})
export class SitterListComponent implements OnInit {
  @Input() sitter: Sitter;
  @Output() sitterEditClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.sittersActions.deleteSitter(this.sitter._id);
  }

  onEditClick() {
    // Handle logic here, or pass event to parent component.
    this.sitterEditClicked.emit(this.sitter);
  }

}
