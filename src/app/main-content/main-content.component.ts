import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-main-content',
  imports: [],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  profile = PROFILE;
  // First role is repeated at the end so the vertical ticker loops seamlessly.
  roles = [...PROFILE.roles, PROFILE.roles[0]];
}
