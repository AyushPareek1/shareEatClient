import { useState } from 'react';
import { REGISTERNGO } from '../Utils/constant';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function NgoRegistration() {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    ngoName: "",
    phoneNo: "",
    email: "",
    address: "",
  })

  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData((prev) => ({...prev,[name]: type === "checkbox" ? checked : value})
  )
  }

  function submitHandler(event) {
    event.preventDefault();

    fetch(`${REGISTERNGO}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      Swal.fire(
        'Success!',
        'Your data has been submitted successfully!',
        'success'
      );
      navigate('/')
    })
    
    .catch((error) => {
      console.error('Error:', error);
      Swal.fire(
        'Error!',
        'There was an error submitting your data.',
        'error'
      );
    });
  }
  return (
    
    <div className="bg-white px-6 py-12 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-custom-color  border-b border-custom-color">NGO Registration </h1>
     
    </div>
    <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={submitHandler}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ngoName" className="block text-sm font-semibold leading-6 text-gray-900">NGO Name</label>
          <div className="mt-2.5">
            <input 
              type="text" 
              name="ngoName"
              id="ngoName"
              placeholder="Name"
              value={formData.ngoName}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phoneNo" className="block text-sm font-semibold leading-6 text-gray-900">Phone No</label>
          <div className="mt-2.5">
            <input 
              type="number" 
              name="phoneNo"
              id="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
          <div className="mt-2.5">
            <input 
              type="text" 
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor='address' className="block text-sm font-semibold leading-6 text-gray-900">Address(Google Maps Url)</label>
          <div className="mt-2.5">
            <input
              type="text"
              name="address"
              id='address'
              placeholder='Address'
              value={formData.address}
              onChange={changeHandler}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button type="submit" className='bg-blue-600 text-white rounded-sm py-2 w-full block'>Save →</button>
      </div>
    </form>
  </div>
  );
}

export default NgoRegistration;