import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { ACCEPT_LISTING } from '../Utils/constant';

const ListingTable = ({ donors }) => {
    const [openModal, setOpenModal] = useState(null);
    return (
        <div className="overflow-x-auto fade-in w-full flex flex-col justify-center mb-16">
            <table className="w-full border-2 border-brown max-w-full">
                <thead className="w-full">
                    <tr className="bg-brown text-white w-full">
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Name
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Email
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Phone
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Address
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Food Type
                        </th>

                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Listing time
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Shelf Life
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Price/Donation
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Status
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Accept
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {donors.map((donor, index) => (
                        <React.Fragment key={index}>
                            {donor.listings.map((listing, index) => (
                                listing && (
                                    <tr key={index} className="border-b border-[#EF4D48]">
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {donor.name}
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {/* {donor.email}
                                             */}
                                            <a href={`mailto:${donor.email}`}>{donor.email}</a>
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {/* {donor.phoneNumber}
                                             */}
                                            <a href={`tel:${donor.phoneNumber}`}>{donor.phoneNumber}</a>
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins" onClick={() => setOpenModal(index)}>
                                            {listing.location}

                                            <Modal
                                                isOpen={openModal === index}
                                                onRequestClose={() => setOpenModal(null)}
                                                contentLabel="Map Modal"
                                            >
                                                <button onClick={(e) => { e.stopPropagation(); setOpenModal(null); }}>Close</button>
                                                <iframe
                                                    width="600"
                                                    height="450"
                                                    frameborder="0"
                                                    style={{ border: 0 }}
                                                    className='w-full h-full justify-normal'
                                                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB2bESt_HNeVfwk0aJfQ3o9sLblIyyToeQ&q=${listing.location}`}
                                                    allowfullscreen
                                                ></iframe>
                                            </Modal>


                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {listing.foodType}
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {listing.listingTime}
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {listing.shelfLife}
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {listing.gift ? '-' : listing.price}
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {listing.active ?
                                                <div className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green" className="h-6 w-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>Active</span>
                                                </div>
                                                :
                                                'Expired'
                                            }
                                        </td>
                                        <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                            {listing.active ? (
                                                <button
                                                    className="px-4 py-2 rounded bg-blue-500 text-white"
                                                    onClick={() => {
                                                        axios.post(`${ACCEPT_LISTING}`, {
                                                            listingId: listing._id
                                                        })
                                                            .then(response => {
                                                                console.log(response);
                                                                Swal.fire(
                                                                    'Success!',
                                                                    'Accepted Succesfully! Donor has been informed.',
                                                                    'success'
                                                                );
                                                            })
                                                            .catch(error => {
                                                                console.error('There was an error!', error);
                                                                Swal.fire(
                                                                    'Error!',
                                                                    'There was a problem ',
                                                                    'error'
                                                                );
                                                            });
                                                    }} >
                                                    Accept?
                                                </button>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                    </tr>
                                )

                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListingTable;