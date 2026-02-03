import { useContext } from "react";
import OrderContext from "../context/orderContext";

export default function Orders() {
  const ctx = useContext(OrderContext);
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const Delete = ctx.Delete;
  const updt = ctx.updt;

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذه الطلبية؟")) {
      try {
        await Delete(id);
      } catch (error) {
        console.error("خطأ في حذف الطلبية:", error);
        alert("فشل حذف الطلبية");
      }
    }
  };

  const handleUpdateStatus = async (id) => {
    try {
      await updt(id);
    } catch (error) {
      console.error("خطأ في تحديث حالة الطلبية:", error);
      alert("فشل تحديث حالة الطلبية");
    }
  };

  return (
    <div className="flex flex-col m-4 min-h-full space-y-8 justify-center text-center max-w-full items-center">
      {/* Header Card */}
      <div className="card bg-base-200 shadow-xl border-4 border-blue-600 rounded-lg w-full max-w-7xl">
        <div className="card-body">
          <h1 className="card-title justify-center text-4xl font-extrabold text-white">
            قائمة الطلبيات
          </h1>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full text-black border-4 border-blue-600 rounded-lg bg-white">
        <table className="table bg-white min-w-full">
          {/* Head */}
          <thead className="text-black bg-gray-100">
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">الطلبية</th>
              <th className="text-center">اسم المشتري</th>
              <th className="text-center">الرقم</th>
              <th className="text-center">الولاية</th>
              <th className="text-center">المدينة</th>
              <th className="text-center">المجموع</th>
              <th className="text-center">الحالة</th>
              <th className="text-center">مسح</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {/* Empty State */}
            {orders.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center py-8">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-6xl">🛒</span>
                    <p className="text-xl font-semibold text-gray-500">
                      لا توجد طلبيات
                    </p>
                  </div>
                </td>
              </tr>
            )}

            {/* Orders */}
            {orders.map((order, index) => (
              <tr
                key={order._id || index}
                className={`transition-colors duration-300 ${
                  order.Done ? "bg-green-100" : "hover:bg-gray-50"
                }`}
              >
                <td className="text-center font-semibold">{index + 1}</td>

                {/* Order Items */}
                <td className="max-w-[220px] whitespace-normal">
                  {Array.isArray(order.order) && order.order.length === 0 && (
                    <p className="text-gray-500 italic">لا منتج</p>
                  )}

                  {Array.isArray(order.order) &&
                    order.order.map((item, i) => (
                      <div
                        key={i}
                        className="text-sm border-b last:border-b-0 py-2 text-right"
                      >
                        <strong className="block">
                          {i + 1}. {item.title || "بدون عنوان"}
                        </strong>
                        <span className="text-gray-600">
                          الكمية: <span className="font-semibold">{item.quantity ?? 0}</span>
                        </span>
                      </div>
                    ))}
                </td>

                <td className="text-center">
                  <div className="font-medium">{order.name}</div>
                </td>
                <td className="text-center" dir="ltr">{order.Number}</td>
                <td className="text-center">
                  
                </td>
                <td className="text-center">{order.willaya}</td>
                <td className="text-center">{order.city}</td>
                <td className="text-center font-semibold">
                  {order.totalPrice?.toFixed(2) ?? "0.00"} دج
                </td>

                {/* Status */}
                <td className="text-center">
                  {order.Done ? (
                    <span className="badge badge-success gap-2">
                      ✓ تم
                    </span>
                  ) : (
                    <button
                      onClick={() => handleUpdateStatus(order._id)}
                      className="btn btn-primary btn-sm"
                    >
                      أكد الطلبية
                    </button>
                  )}
                </td>

                {/* Delete */}
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-error btn-sm"
                  >
                    مسح
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