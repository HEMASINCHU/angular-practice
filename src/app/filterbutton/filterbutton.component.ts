import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filterbutton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filterbutton.component.html',
  styleUrls: ['./filterbutton.component.scss'],
})
export class FilterbuttonComponent {
  @Output() selectedEvent = new EventEmitter<string>();

  filterButtons = [
    { id: 1, label: 'All', category: 'all' },
    { id: 2, label: 'Mixes', category: 'mixes' },
    { id: 3, label: 'Music', category: 'music' },
    { id: 4, label: 'Live', category: 'live' },
  ];
  selectedFilter = this.filterButtons[0];

  onSelect(filter: any) {
    this.selectedFilter = filter;
    this.selectedEvent.emit(filter);
  }
}
