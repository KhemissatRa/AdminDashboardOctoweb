import { useContext } from "react";
import ProductContext from "../context/productContext";

export default function Products() {
  const { products, Delete } = useContext(ProductContext);

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      try {
        await Delete(id);
      } catch (error) {
        console.error("خطأ في حذف المنتج:", error);
        alert("فشل حذف المنتج");
      }
    }
  };

  return (
    <div className="flex flex-col m-4 min-h-full space-y-8 justify-center max-w-full text-center items-center">
      {/* Header Card */}
      <div className="card bg-base-200 shadow-xl border-4 border-blue-600 rounded-lg w-full max-w-7xl">
        <div className="card-body">
          <h1 className="card-title text-4xl font-extrabold text-white justify-center">
            المنتجات
          </h1>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full border-4 border-blue-600 rounded-lg bg-white text-black">
        {products.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <p className="text-xl">لا توجد منتجات حالياً</p>
          </div>
        ) : (
          <table className="table min-w-full">
            {/* Head */}
            <thead className="text-black bg-gray-100">
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">الصورة</th>
                <th className="text-center">الاسم</th>
                <th className="text-center">الفئة</th>
                <th className="text-center">الثمن</th>
                <th className="text-center">الحالة</th>
                <th className="text-center">الفعل</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {products.map((item, index) => (
                <tr key={item._id || index} className="hover">
                  <th className="text-center">{index + 1}</th>
                  <td className="flex justify-center">
                    <div className="avatar">
                      <div className="w-20 h-20 rounded">
                        <img
                          src={item.Image}
                          alt={item.title}
                          className="object-cover"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/150?text=No+Image";
                          }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="font-medium">{item.title}</div>
                  </td>
                  <td className="text-center">{item.Category}</td>
                  <td className="text-center font-semibold">
                    {item.price} دج
                  </td>
                  <td className="text-center">
                    <span className="badge badge-success badge-sm">
                      متوفر
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}