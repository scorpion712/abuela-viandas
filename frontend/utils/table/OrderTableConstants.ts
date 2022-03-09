import { Customer, Order, HeadCell } from "../interfaces";

function createData(
  id: string,
  total: number,
  customer: string,
  date: Date,
  deliveryDate: Date
): Order {
  return {
    id,
    total,
    customer,
    date,
    deliveryDate,
  };
}

export const orders = [
  createData("000001", 305, "customer1", new Date(), new Date()),
  createData("000002", 615, "customer2", new Date(), new Date()),
  createData("000003", 1305, "customer3", new Date(), new Date()),
  createData("000004", 3025, "customer4", new Date(), new Date()),
  createData("000005", 4305, "customer5", new Date(), new Date()),
  createData("000006", 305, "customer6", new Date(), new Date()),
  createData("000007", 3645, "customer7", new Date(), new Date()),
  createData("000008", 805, "customer8", new Date(), new Date()),
  createData("000009", 909, "customer9", new Date(), new Date()),
];

export const headCells: HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "#order",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: false,
    label: "Realizado",
  },
  {
    id: "customer",
    numeric: false,
    disablePadding: false,
    label: "Cliente",
  },
  {
    id: "total",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  {
    id: "deliveryDate",
    numeric: false,
    disablePadding: false,
    label: "Entrega",
  },
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "",
  },
];
