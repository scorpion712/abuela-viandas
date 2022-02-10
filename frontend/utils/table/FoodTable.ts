
import { Menu, MenuHeadCell } from '../interfaces';

function createData(
    name: string,
    price: number,
    last_date: string,
    img: string,
    id: string
  ): Menu {
    return {
      name,
      price,
      last_date,
      img,
      id,
    };
  }
  
export  const menues = [
    createData('Cupcake', 305, '7/2/2022', 'img/route', '1'),
    createData(
      'Donut',
      452,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '2'
    ),
    createData(
      'Eclair',
      262,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '3'
    ),
    createData(
      'Frozen yoghurt',
      159,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '3'
    ),
    createData(
      'Gingerbread',
      356,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '4'
    ),
    createData(
      'Honeycomb',
      408,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '5'
    ),
    createData(
      'Ice cream sandwich',
      237,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '6'
    ),
    createData(
      'Jelly Bean',
      375,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '7'
    ),
    createData(
      'KitKat',
      518,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '8'
    ),
    createData(
      'Lollipop',
      392,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '9'
    ),
    createData(
      'Marshmallow',
      321,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '10'
    ),
    createData(
      'Nougat',
      360,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '11'
    ),
    createData(
      'Oreo',
      437,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '12'
    ),
  ];
  
export const headCells: MenuHeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Descripcion',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'Precio',
    },
    {
      id: 'last_date',
      numeric: false,
      disablePadding: false,
      label: 'Ultima Fecha',
    },
    {
      id: 'id',
      numeric: false,
      disablePadding: false,
      label: '',
    },
  ];