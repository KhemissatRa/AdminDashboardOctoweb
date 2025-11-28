import { useContext } from "react";
import OrderContext from "../context/orderContext";

export default function Orders() {
  const { orders, Delete, updt } = useContext(OrderContext);

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
            {orders.map((order, index) => (
              <tr
                key={order._id || index}
                className={`transition-colors duration-300 ${
                  order.Done ? "bg-green-200 text-black" : "bg-base-100"
                }`}
              >
                <td>{index + 1}</td>

                {/* Orders List */}
                <td className="truncate max-w-[120px]">
                  {order.order.map((item, i) => (
                    <div key={i}>
                      {i + 1}: {item.toUpperCase()}
                    </div>
                  ))}
                </td>

                <td className="truncate max-w-[120px]">{order.name}</td>
                <td className="truncate max-w-[100px]">{order.Number}</td>
                <td className="truncate max-w-[150px]">{order.email}</td>
                <td className="truncate max-w-[100px]">{order.willaya}</td>
                <td className="truncate max-w-[100px]">{order.city}</td>
                <td>{order.totalPrice} $</td>

                <td>
                  <button
                    onClick={() => Delete(order._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>

                <td>
                  {!order.Done && (
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
