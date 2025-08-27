import { useLoaderData } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

day.extend(advancedFormat);

function OrdersList() {
  // Get the orders and meta form the loader
  const { orders, meta } = useLoaderData();

  // Returned JSX
  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">Total orders: {meta.pagination.total}</h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* HEAD */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ id, attributes }) => (
              <tr key={id}>
                <th>{attributes.name}</th>
                <th>{attributes.address}</th>
                <th>{attributes.numItemsInCart}</th>
                <th>{attributes.orderTotal}</th>
                <th className="hidden sm:block">
                  {day(attributes.createdAt).format("MMM Do, YYYY - hh:mm a")}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersList;
