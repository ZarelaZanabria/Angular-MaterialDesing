import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';


export interface ListaHas {
  IdHas: string;
  NroConformidadServicio: string;
  DocumentoMaterial: string;
  Proveedor: string;
  Cliente: string;
  EstadoDescripcion: string;
  FechaAprobacion: string;
}


const ELEMENT_DATA: ListaHas[] = [
  {
    IdHas: '108f274e-c1fd-43fb-b6ae-39d75d7fe2ad',
    NroConformidadServicio: 'CS000000060',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'GENERAL MOTORS PERU S A',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '18/06/2019'
  }, {
    IdHas: '919b6e53-91a7-4889-aa55-4eeb8e9124bc',
    NroConformidadServicio: 'CS000000059',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'GENERAL MOTORS PERU S A',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '18/06/2019'
  }, {
    IdHas: 'd807310b-c245-4174-91cf-80fca17af687',
    NroConformidadServicio: 'CS000000061',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'GENERAL MOTORS PERU S A',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '18/06/2019'
  }, {
    IdHas: '89826cd7-b89d-4075-b8b7-292297d329ba',
    NroConformidadServicio: 'CS000000057',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '14/06/2019'
  }, {
    IdHas: 'c7b95768-d48c-46b2-9e94-8035e7ed9de0',
    NroConformidadServicio: 'CS000000058',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '14/06/2019'
  }, {
    IdHas: 'de2038dd-370c-41ce-900a-0910aaa07247',
    NroConformidadServicio: 'CS000000056',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '14/06/2019'
  }, {
    IdHas: '070bebd3-a483-488a-be4a-5c84431ff975',
    NroConformidadServicio: 'CS000000055',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '12/06/2019'
  }, {
    IdHas: '2de06b6e-44ec-48c8-80ff-f64d238ccb5d',
    NroConformidadServicio: 'CS000000051',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '12/06/2019'
  }, {
    IdHas: '4286a068-5431-4eec-8d03-6d745d68f39b',
    NroConformidadServicio: 'CS000000054',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '12/06/2019'
  }, {
    IdHas: '445c014c-5419-402a-9afe-891357d3d580',
    NroConformidadServicio: 'CS000000052',
    DocumentoMaterial: 'CHASERP-ejm',
    Proveedor: 'TEJIDOS SAN JACINTO S.A.',
    Cliente: 'BOLSA DE VALORES DE LIMA S.A.A.',
    EstadoDescripcion: 'Aceptada',
    FechaAprobacion: '12/06/2019'
  },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  public displayedColumns: string[] = ['select', 'IdHas', 'NroConformidadServicio', 'DocumentoMaterial', 'Proveedor', 'EstadoDescripcion', 'FechaAprobacion'];
  public dataSource = new MatTableDataSource<ListaHas>(ELEMENT_DATA);
  public selection = new SelectionModel<ListaHas>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ListaHas): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.IdHas + 1}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
