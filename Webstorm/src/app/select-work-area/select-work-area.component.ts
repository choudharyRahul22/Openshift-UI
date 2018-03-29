import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-work-area',
  templateUrl: './select-work-area.component.html',
  styleUrls: ['./select-work-area.component.css']
})
export class SelectWorkAreaComponent implements OnInit {
  workAreaSelectionForm: FormGroup;

  defaultQueueName = {queueId: 1 , queueName: 'Order Creation'};
  queueName = [{queueId: 1 , queueName: 'Order Creation'}, {queueId: 2 , queueName: 'Order Creation-2'}];

  defaultBusinessName = {businessId: 1 , businessName: 'TMS'};
  businessName = [{businessId: 1 , businessName: 'TMS'}, {businessId: 2 , businessName: 'TMS-2'}];

  defaultCellName = {cellId: 1 , cellName: 'No Cell'};
  cellName = [{cellId: 1 , cellName: 'No Cell'}, {cellId: 2 , cellName: 'No Cell-2'}];

  defaultSourceName = {sourceId: 1 , sourceName: 'Imaging'};
  sourceName = [{sourceId: 1 , sourceName: 'Imaging'}, {sourceId: 2 , sourceName: 'Imaging-2'}];

  constructor( private router: Router) { }

  ngOnInit() {
    this.initWorkAreaSelectionForm();
  }

  initWorkAreaSelectionForm() {
    let queueName = [];
    let businessName = [];
    let cellName = [];
    let sourceName = [];

    this.workAreaSelectionForm = new FormGroup({
      'queueName': new FormControl(queueName, Validators.required),
      'businessName': new FormControl(businessName, Validators.required),
      'cellName': new FormControl(cellName, Validators.required),
      'sourceName': new FormControl(sourceName, Validators.required),
    });
  }

  onworkAreaSelection() {

  }

  openOrderScreen() {
    this.router.navigate(['/create-order']);
  }

}
