import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderServiceService } from '../../services/loader-service.service';

@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss'],
})
export class LoaderSpinnerComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderServiceService) {}

  ngOnInit(): void {}
}
