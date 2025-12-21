import { useContext } from "react";
import ProductContext from "../context/productContext";

export default function Products() {
  const { products,  Delete } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="flex flex-col m-4 min-h-full space-y-8 justify-center max-w-full text-center items-center">
      {/* Header Card */}
      <div className="card bg-base-200 shadow-xl border-4 border-blue-600 rounded-lg w-full max-w-7xl">
        <div className="card-body">
          <h1 className="card-title text-4xl font-extrabold text-white">
المنتجات          </h1>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full border-4 border-blue-600 rounded-lg bg-white text-black">
        <table className="table min-w-full">
          {/* Head */}
          <thead className="text-black">
            <tr>
              <th>#</th>
              <th>الصورة</th>
              <th>الاسم</th>
              <th>الفئة</th>
              <th>التمن</th>
              <th>الفعل</th>
              <th>الحالة</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {products.map((item, index) => (
              <tr key={item._id || index} className="hover">
                <th>{index + 1}</th>
                <td className="truncate max-w-[100px]"><img src={item.Image} alt={item.title} style={{ width: "200px", height: "auto" }} /></td>
                <td className="truncate max-w-[150px]">{item.title}</td>
                <td className="truncate max-w-[150px]">{item.Category}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => Delete(item._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
