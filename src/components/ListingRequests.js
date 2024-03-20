import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

const DonorTable = ({ donors }) => {

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
                            Location
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Phone Number
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Email
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Food type
                        </th>
                        <th className="p-3 text-center border-white border-r whitespace-nowrap font-bold font-Poppins">
                            Timings
                        </th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {donors.map((donor, donorIndex) => (
                        <React.Fragment key={donorIndex}>
                            {donor.listings.map((listing, listingIndex) => (
                                <tr key={listingIndex} className="border-b border-[#EF4D48]">
                                    <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                        {donor.name}
                                    </td>
                                    <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins" onClick={() => setOpenModal(listingIndex)}>
                                        {donor.address}
                                        <Modal
                                            isOpen={openModal === listingIndex}
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
                                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB2bESt_HNeVfwk0aJfQ3o9sLblIyyToeQ&q=${donor.address}`}
                                                allowfullscreen
                                            ></iframe>
                                        </Modal>
                                    </td>
                                    <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                        {/* {donor.phoneNumber} */}
                                        <a href={`tel:${donor.phoneNumber}`}>{donor.phoneNumber}</a>
                                    </td>
                                    <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                        {/* {donor.email} */}
                                        <a href={`mailto:${donor.email}`}>{donor.email}</a>
                                    </td>
                                    <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                        {donor.foodType}
                                    </td>
                                    <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                        {donor.openingTime} + {donor.closingTime}
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonorTable;