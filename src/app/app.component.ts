import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
  
})
export class AppComponent {
	@ViewChild('grid') grid: jqxGridComponent;
	private data = [
		{ id : 0, protocol: 'TCP', number: 1, name: 'name1', description: 'description1' },
		{ id : 1,protocol: 'UDP', number: 1, name: 'name2', description: 'description2' },
		{ id : 2,protocol: 'TCP', number: 2, name: 'name3', description: 'description3' },
		{ id : 3,protocol: 'UDP', number: 2, name: 'name4', description: 'description4' },
		{ id : 4,protocol: 'TCP', number: 3, name: 'name5', description: 'description5' },
		{ id : 5,protocol: 'UDP', number: 3, name: 'name6', description: 'description6' },
		{ id : 6,protocol: 'TCP', number: 4, name: 'name7', description: 'description7' },
		{ id : 7,protocol: 'UDP', number: 4, name: 'name8', description: 'description8' },
		{ id : 8,protocol: 'TCP', number: 5, name: 'name9', description: 'description9' },
		{ id : 9,protocol: 'UDP', number: 5, name: 'name10', description: 'description10' },
	  ];
  
	  private source: any = {
		  localdata: this.data,
		  datatype: 'json',
		  autobind: true,
		  datafields: [
			{ name: 'protocol', type: 'string' },
			{ name: 'number', type: 'number' },
			{ name: 'name', type: 'string' },
			{ name: 'description', type: 'string' }
		  ],
		};
	  public dataAdapter: any = new jqx.dataAdapter(this.source);
	  public columns: any[] = [
		{ text: 'Protocol', datafield: 'protocol' },
		{ text: 'Port', datafield: 'number' },
		{ text: 'Name', datafield: 'name' },
		{ text: 'Description', datafield: 'description' },
		{
			text: '', datafield: 'Edit',
			width: 40, columnType: 'button',
			cellsRenderer: (row: any, column: any, value: any, defaulthtml: string, columnproperties: any, rowdata: any) => {
			  return '<i class="fa fa-pencil editButton" style="color: greenyellow; font-size : 18px"></i>';
			//   return 'edit';
			},
			buttonclick: (row: number): void => {
				// console.log(row);
				this.editRow(row);
				
                // alert("Hi");
            }
		  },
		  {
			text: '', datafield: 'Delete',
			width: 40, columnType: 'button',
			cellsRenderer: (row: any, column: any, value: any, defaulthtml: string, columnproperties: any, rowdata: any) => {
			   return '<i class="fa fa-trash" style="color: red; font-size : 18px"></i>';
			//  return 'del';
			},
			buttonclick: (row: number): void => {
                this.deleteRow(row)
            }
		  }
	  ];
  
	  editRow(row:any) {
		const rowData = this.grid.getrowdatabyid(row);
		console.log('row data:', rowData);
		// this.editModal.show();
	  }
  
	  deleteRow(row:any) {
		this.source.localdata.forEach((element:any) => {
			if(row == element.id){
				// console.log(element);				
				this.grid.deleterow(element.id);
			}
		});
		
		// const rowData = this.grid.getrowdatabyid(row);
		// this.grid.deleterow(row);
		// console.log('row data:', rowData);
		// this.deleteModal.show();
	  }
}
