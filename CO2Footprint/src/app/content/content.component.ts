import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

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
  {position: 11, cO2_ausstoss: 1900000, unternehmen: 'Sinopec Group', land: 'China'},
  {position: 12, cO2_ausstoss: 1900000, unternehmen: 'Sinopec Group', land: 'China'},
  {position: 13, cO2_ausstoss: 1900000, unternehmen: 'Sinopec Group', land: 'China'},

];

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  filterValue: string = '';
  showImpressum: boolean = false;
  showAbout: boolean = false;
  showMainPage: boolean = false;

  displayedColumns: string[] = ['position', 'co2_ausstoß', 'unternehmen', 'land'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  position = new FormControl('start' as 'start' | 'end');

  constructor(private route: ActivatedRoute, private router: Router, private _liveAnnouncer: LiveAnnouncer) {
  }

  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit() {
    this.route.url.subscribe(segments => {
      this.showImpressum = segments.some(segment => segment.path === 'impressum');
      this.showAbout = segments.some(segment => segment.path === 'about');
      this.showMainPage = segments.some(segment => segment.path === 'index');
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showImpressum = event.url === '/impressum';
        this.showAbout = event.url === '/about';
        this.showMainPage = event.url === '/index';
      }
    });
    this.dataSource.sort = this.sort;
  }

  applyFilter() {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data, filter) => {
      const searchTerm = filter.toLowerCase();
      return (
        data.land.toLowerCase().includes(searchTerm) ||
        data.unternehmen.toLowerCase().includes(searchTerm)
      );
    };

  }
}
