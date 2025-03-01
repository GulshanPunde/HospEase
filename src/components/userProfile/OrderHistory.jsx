// OrderHistory.js
import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const OrderHistory = () => {
  const [filter, setFilter] = useState('all');

  const orders = [
    { id: 1, number: '12345', price: 150.00, date: 'Oct 20, 2024', status: 'Delivered' },
    { id: 2, number: '12346', price: 200.00, date: 'Sep 10, 2024', status: 'Delivered' },
    { id: 3, number: '12347', price: 300.00, date: 'Oct 15, 2024', status: 'Cancelled' },
  ];

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.status.toLowerCase() === filter;
  });

  const handleReorder = (orderNumber) => {
    Swal.fire({
      title: 'Confirm Reorder',
      text: `Are you sure you want to reorder Order #${orderNumber}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reorder it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the reorder action here (e.g., make an API call)
        Swal.fire({
          icon: 'success',
          title: 'Reorder Successful',
          text: `Order #${orderNumber} has been successfully reordered!`,
          confirmButtonColor: '#007bff',
        });
      }
    });
  };

  return (
    <div className="card bg-dark text-light mb-3 shadow-sm border-0">
      <div className="card-body">
        <h4 className="card-title fw-bold mb-4">Order History</h4>

        {/* Filter Options */}
        <div className="mb-4">
          <label className="me-2">Filter by Status:</label>
          <select
            className="form-select form-select-sm bg-secondary text-light"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Orders</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Order Number</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Delivery Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td className="fw-semibold">#{order.number}</td>
                  <td><span className="badge bg-warning text-dark">${order.price.toFixed(2)}</span></td>
                  <td>
                    {order.status === 'Delivered' ? (
                      <span className="badge bg-success">Delivered</span>
                    ) : (
                      <span className="badge bg-danger">Cancelled</span>
                    )}
                  </td>
                  <td className={order.status === 'Delivered' ? 'text-info' : 'text-muted'}>
                    {order.status === 'Delivered' ? order.date : 'N/A'}
                  </td>
                  <td>
                    {order.status === 'Delivered' ? (
                      <button className="btn btn-primary btn-sm" onClick={() => handleReorder(order.number)}>
                        Reorder
                      </button>
                    ) : (
                      <button className="btn btn-danger btn-sm" disabled>
                        Cannot Reorder
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
