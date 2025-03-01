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
      background: '#343a40',
      color: '#ffffff',
      confirmButtonColor: '#007bff',
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
          background: '#343a40',
          color: '#ffffff',
          confirmButtonColor: '#007bff',
        });
      }
    });
  };

  const handleEditAddress = (index) => {
    Swal.fire({
      title: 'Edit Address',
      input: 'text',
      inputValue: addresses[index],
      background: '#343a40',
      color: '#ffffff',
      confirmButtonColor: '#007bff',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const updatedAddresses = [...addresses];
        updatedAddresses[index] = result.value;
        setAddresses(updatedAddresses);
        Swal.fire({
          icon: 'success',
          title: 'Address Updated',
          text: 'Your address has been updated successfully!',
          background: '#343a40',
          color: '#ffffff',
          confirmButtonColor: '#007bff',
        });
      }
    });
  };

  const handleRemoveAddress = (index) => {
    Swal.fire({
      title: 'Remove Address',
      text: 'Are you sure you want to remove this address?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, remove it!',
      background: '#343a40',
      color: '#ffffff',
    }).then((result) => {
      if (result.isConfirmed) {
        setAddresses(addresses.filter((_, i) => i !== index));
        Swal.fire({
          icon: 'success',
          title: 'Address Removed',
          text: 'The address has been removed successfully.',
          background: '#343a40',
          color: '#ffffff',
          confirmButtonColor: '#007bff',
        });
      }
    });
  };

  return (
    <div className="card bg-dark text-light mb-3 shadow-sm border border-primary">
      <div className="card-body">
        <h4 className="card-title fw-bold">Saved Addresses</h4>
        <ul className="list-unstyled mt-3">
          {addresses.map((address, index) => (
            <li key={index} className="mb-2 p-2 bg-secondary rounded d-flex justify-content-between align-items-center">
              <span>{address}</span>
              <div>
                <button
                  className="btn btn-outline-warning btn-sm me-2 "
                  onClick={() => handleEditAddress(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger btn-sm "
                  onClick={() => handleRemoveAddress(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button 
            className="btn btn-outline-light mt-3"
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
