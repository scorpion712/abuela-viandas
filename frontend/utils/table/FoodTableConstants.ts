
import { Menu, HeadCell } from '../interfaces';

function createData(
    name: string,
    price: number,
    last_date: string,
    img: string,
    id: string,
    category: string
  ): Menu {
    return {
      name,
      price,
      last_date,
      img,
      id,
      category
    };
  }
  
export  const menues = [
    createData('Cupcake', 305, '7/2/2022', 'img/route', '1', "Light"),
    createData(
      'Donut',
      452,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '2', "Light"
    ),
    createData(
      'Eclair',
      262,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '3', "Light"
    ),
    createData(
      'Frozen yoghurt',
      159,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '3', "Normal"
    ),
    createData(
      'Gingerbread',
      356,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '4', "Normal"
    ),
    createData(
      'Honeycomb',
      408,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '5', "Normal"
    ),
    createData(
      'Ice cream sandwich',
      237,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '6', "Vegano"
    ),
    createData(
      'Jelly Bean',
      375,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '7', "Normal"
    ),
    createData(
      'KitKat',
      518,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '8', "Light"
    ),
    createData(
      'Lollipop',
      392,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '9', "Vegano"
    ),
    createData(
      'Marshmallow',
      321,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '10', "Vegano"
    ),
    createData(
      'Nougat',
      360,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '11', "Light"
    ),
    createData(
      'Oreo',
      437,
      new Date().toLocaleDateString('es-ES'),
      'img/route',
      '12', "Light"
    ),
  ];
  
export const headCells: HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Descripcion',
    },
    {
      id: 'category',
      numeric: false,
      disablePadding: false,
      label: 'Categoria',
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