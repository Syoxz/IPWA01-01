import {Component, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

export interface CO2Footprint {
  cO2_ausstoss: number;
  position: number;
  unternehmen: string;
  land: string;
}
const ELEMENT_DATA: CO2Footprint[] = [
  {position: 1, cO2_ausstoss: 5500000, unternehmen: 'Saudi Aramco', land: 'Saudi-Arabien'},
  {position: 2, cO2_ausstoss: 4200000, unternehmen: 'Chevron', land: 'USA'},
  {position: 3, cO2_ausstoss: 3600000, unternehmen: 'Gazprom', land: 'Russland'},
  {position: 4, cO2_ausstoss: 2900000, unternehmen: 'ExxonMobil', land: 'USA'},
  {position: 5, cO2_ausstoss: 2700000, unternehmen: 'Royal Dutch Shell', land: 'Niederlande'},
  {position: 6, cO2_ausstoss: 2300000, unternehmen: 'BP', land: 'Vereinigtes Königreich'},
  {position: 7, cO2_ausstoss: 1900000, unternehmen: 'Sinopec Group', land: 'China'},
  {position: 8, cO2_ausstoss: 1700000, unternehmen: 'TotalEnergies', land: 'Frankreich'},
  {position: 9, cO2_ausstoss: 1600000, unternehmen: 'Kuwait Petroleum Corporation', land: 'Kuwait'},
  {position: 10, cO2_ausstoss: 1500000, unternehmen: 'PetroChina', land: 'China'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  filterValue: string = '';
  displayedColumns: string[] = ['position', 'cO2_ausstoss', 'unternehmen', 'land'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data, searchTerm) => {
      return (
        data.cO2_ausstoss.toFixed().includes(searchTerm) ||
        data.land.toLowerCase().includes(searchTerm) ||
        data.unternehmen.toLowerCase().includes(searchTerm)
      );
    };
  }

}
