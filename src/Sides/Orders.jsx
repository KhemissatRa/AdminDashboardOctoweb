import { useContext } from "react";
import OrderContext from "../context/orderContext";

export default function Orders() {

  const ctx = useContext(OrderContext);
  const orders = Array.isArray(ctx.orders) ? ctx.orders : [];
  const Delete = ctx.Delete;
  const updt = ctx.updt;

  return (
    <div className="flex flex-col m-4 min-h-full space-y-8 justify-center text-center max-w-full items-center">

      {/* Header Card */}
      <div className="card bg-base-200 shadow-xl border-4 border-blue-600 rounded-lg w-full max-w-7xl">
        <div className="card-body">
          <h1 className="card-title text-center text-4xl font-extrabold text-white">
            Order List
          </h1>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto w-full border-4 border-blue-600 rounded-lg bg-white text-black">
        <table className="table min-w-full">

          {/* Head */}
          <thead className="text-black">
            <tr>
              <th>#</th>
              <th>Order</th>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Wilaya</th>
              <th>City</th>
              <th>Total $</th>
              <th>Delete</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>

            {/* Empty State */}
            {orders.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center font-bold py-6">
                  No Orders Found 🛒
                </td>
              </tr>
            )}

            {/* Orders */}
            {orders.map((order, index) => (
              <tr
                key={order._id || index}
                className={`transition-colors duration-300 ${
                  order.Done ? "bg-green-200 text-black" : "bg-base-100"
                }`}
              >
                <td>{index + 1}</td>

                {/* Order Items */}
                <td className="max-w-[220px] whitespace-normal">

                  {Array.isArray(order.order) && order.order.length === 0 && (
                    <p className="text-gray-500 italic">No items</p>
                  )}

                  {Array.isArray(order.order) &&
                    order.order.map((item, i) => (
                      <div key={i} className="text-sm border-b last:border-b-0 py-1">
                        <strong>
                          {i + 1}. {item.title?.toUpperCase() || "NO TITLE"}
                        </strong>
                        <br />
                        <span className="text-gray-700">
                          Quantity:
                        </span> {item.quantity ?? 0}
                      </div>
                    ))
                  }

                </td>

                <td className="truncate max-w-[120px]">{order.name}</td>
                <td className="truncate max-w-[100px]">{order.Number}</td>
                <td className="truncate max-w-[150px]">{order.email}</td>
                <td className="truncate max-w-[100px]">{order.willaya}</td>
                <td className="truncate max-w-[100px]">{order.city}</td>
                <td>{order.totalPrice?.toFixed(2) ?? "0.00"} $</td>

                {/* Delete */}
                <td>
                  <button
                    onClick={() => Delete(order._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>

                {/* Status */}
                <td>
                  {order.Done ? (
                    <span className="badge badge-success">Completed</span>
                  ) : (
                    <button
                      onClick={() => updt(order._id)}
                      className="btn btn-primary btn-sm"
                    >
                      Done
                    </button>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
