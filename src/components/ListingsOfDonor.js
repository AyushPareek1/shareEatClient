import { useState } from 'react';
import { LISTDONATION } from '../Utils/constant';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function ListingsOfDonor() {
    const navigate = useNavigate();
    const [price, setPrice] = useState(false)
    const [formData, setFormData] = useState({
        location: "",
        foodType: "",
        diabetic: "",
        listingTime: "",
        shelfLife: "",
        gift: "",
        email: "",
        price: '',
    })

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
        fetch(`${LISTDONATION}`, {
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
            <form onSubmit={submitHandler} className="  max-w-xl ">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-custom-color mb-12 whitespace-nowrap border-b border-custom-color text-center "> List your Eatables</h1>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="location" className="block text-sm font-semibold leading-6 text-gray-900">Location</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="diabetic" className="block text-sm font-semibold leading-6 text-gray-900">Safe for Diabetic person?</label>
                        <div className="mt-2.5">
                            <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" name="diabetic" id="diabetic" value={formData.diabetic} onChange={changeHandler}>
                                <option value="">Select...</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
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
                        <label for="listingTime" className="block text-sm font-semibold leading-6 text-gray-900">Listing Time</label>
                        <div className="mt-2.5">
                            <input
                                type="time"
                                name="listingTime"
                                id="listingTime"
                                value={formData.listingTime}
                                onChange={changeHandler}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="shelfLife" className="block text-sm font-semibold leading-6 text-gray-900">Shelf Life</label>
                            <div className="mt-2.5">
                                <input
                                    type="time"
                                    name="shelfLife"
                                    id="shelfLife"
                                    value={formData.shelfLife}
                                    onChange={changeHandler}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="gift" className="block text-sm font-semibold leading-6 text-gray-900"> Gift/charity?</label>
                            <div className="mt-3 w-full">
                                <select className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" name="gift" id="gift" value={formData.gift} onChange={changeHandler}>
                                    <option value="">Select...</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            {formData.gift === 'false' && (
                                <div>
                                    <label for="price" className="block text-sm font-semibold leading-6 text-gray-900 mt-3">Price (in rupees)</label>
                                    <div className="mt-1">
                                        <input
                                            type="number"
                                            name="price"
                                            id="price"
                                            placeholder='Price'
                                            value={formData.price}
                                            onChange={changeHandler}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="mt-10">
                        <button type="submit" className="bg-blue-600 text-white rounded-sm py-2 w-full block">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ListingsOfDonor;