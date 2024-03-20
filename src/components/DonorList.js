import { useState } from 'react';
import { REGISTERDONOR } from '../Utils/constant';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function DonorListForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        foodType: "",
        openingTime: "",
        closingTime: "",
        address: "",
    })

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
        fetch(`${REGISTERDONOR}`, {
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
        <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 flex flex-col items-center">
            <form onSubmit={submitHandler} className="mx-auto  max-w-xl ">
                <h1 className="text-4xl  font-bold tracking-tight text-custom-color mb-8 whitespace-wrap  border-b border-custom-color ">Eatery Donor Registration</h1>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email Address"
                                value={formData.email}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
                        <div className="mt-2.5">
                            <input
                                type="tel"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="address" className="block text-sm font-semibold leading-6 text-gray-900">Address (Google Maps URL)</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="foodType" className="block text-sm font-semibold leading-6 text-gray-900">Food Type</label>
                        <div className="mt-2.5">
                            <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" name="foodType" id="foodType" value={formData.foodType} onChange={changeHandler}>
                                <option value="">Select...</option>
                                <option value="veg">Veg</option>
                                <option value="nonVeg">Non Veg</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="openingTime" className="block text-sm font-semibold leading-6 text-gray-900">Opening Time</label>
                        <div className="mt-2.5">
                            <input
                                type="time"
                                name="openingTime"
                                id="openingTime"
                                value={formData.openingTime}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="closingTime" className="block text-sm font-semibold leading-6 text-gray-900">Closing Time</label>
                        <div className="mt-2.5">
                            <input
                                type="time"
                                name="closingTime"
                                id="closingTime"
                                value={formData.closingTime}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button type="submit" className="bg-blue-600 text-white rounded-sm py-2 w-full block">Save</button>
                </div>
            </form>
        </div>
    );
}

export default DonorListForm;