import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  dataDepartment = [];
  displayDialog: boolean = false;
  loading: boolean = false;

  alamat: string = '';
  departmentName = '';
  managerName = '';

  constructor(
    private departmentService: DepartmentService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadDepartment();
  }

  loadDepartment(): void {
    this.loading = true;
    this.departmentService.getDepartment().subscribe({
      next: (response) => {
        this.loading = false;
        console.log(response, 'response');
        this.dataDepartment = response.data ?? [];
      },
      error: (error) => {
        this.loading = false;
        alert('There was an error in retrieving data from the server');
      },
    });
  }

  add() {
    this.displayDialog = true;
    this.departmentName = '';
    this.managerName = '';
    this.alamat = '';
  }

  ubah(data: any) {
    console.log(data);
    this.displayDialog = true;
    this.departmentName = data.departmentName;
    this.managerName = data.managerFirstName + ' ' + data.managerLastName;
    this.alamat = data.streetAddress;
  }

  save() {
    console.log('save');
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
    this.loadDepartment();
  }
}
