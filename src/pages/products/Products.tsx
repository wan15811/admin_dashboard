import { useState } from "react";
import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
// import { products } from "../../data";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "productName",
    type: "string",
    headerName: "Product",
    width: 250,
  },
  {
    field: "goldPrice",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    type: "string",
  },
  {
    field: "totalWeight",
    headerName: "TotalWeight",
    width: 200,
    type: "string",
  },
  {
    field: "goldWeight",
    headerName: "GoldWeight",
    width: 200,
    type: "string",
  },
  {
    field: "gemWeight",
    headerName: "GemWeight",
    width: 200,
    type: "string",
  },
  {
    field: "wage",
    headerName: "Wage",
    width: 200,
    type: "string",
  },
  {
    field: "vendor",
    headerName: "Vendor",
    width: 200,
    type: "string",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )} */}
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;