// SavedAddresses.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UserAddresses = () => {
  const [addresses, setAddresses] = useState([
    'Home: 123 Main St, Springfield',
    'Work: 456 Office Plaza, Shelbyville',
  ]);

  const handleAddAddress = () => {
    Swal.fire({
      title: 'Add New Address',
      input: 'text',
      inputPlaceholder: 'e.g., 789 New St, Capital City',
      background: '#343a40', // Dark background for alert
      color: '#ffffff', // White text color
      confirmButtonColor: '#007bff', // Bootstrap primary color for confirm button
      showCancelButton: true,
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        setAddresses((prevAddresses) => [
          ...prevAddresses,
          result.value,
        ]);
        Swal.fire({
          icon: 'success',
          title: 'Address Added',
          text: 'Your new address has been added successfully!',
          background: '#343a40', // Dark background for success alert
          color: '#ffffff', // White text color
          confirmButtonColor: '#007bff', // Bootstrap primary color for confirm button
        });
      }
    });
  };

  return (
    <div className="card bg-dark text-light mb-3 shadow-sm  border border-primary"> {/* Dark mode card */}
      <div className="card-body">
        <h4 className="card-title fw-bold ">Saved Addresses</h4> {/* Centered title */}
        <ul className="list-unstyled mt-3">
          {addresses.map((address, index) => (
            <li key={index} className="mb-2 p-2 bg-secondary rounded"> {/* Address styling */}
              {address}
            </li>
          ))}
        </ul>
        <div> 
          <button 
            className="btn btn-outline-light mt-3" // Light button for dark background
            onClick={handleAddAddress}
          >
            Add New Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAddresses;
