// import React from 'react';
import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';

const NgoTable = ({ ngos }) => {
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

                    </tr>
                </thead>
                <tbody className="w-full">
                    {ngos.map((ngo, index) => (
                        <React.Fragment key={index}>


                            <tr key={index} className="border-b border-[#EF4D48]">
                                <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                    {ngo.ngoName}
                                </td>
                                <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                    {/* {ngo.email} */}
                                    <a href={`mailto:${ngo.email}`}>{ngo.email}</a>
                                </td>
                                <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins">
                                    {/* {ngo.phoneNumber} */}
                                    <a href={`tel:${ngo.phoneNumber}`}>{ngo.phoneNumber}</a>
                                </td>
                                <td className="p-2 border-r border-[#EF4D48] text-center text-[#333] whitespace-nowrap font-bold font-Poppins" onClick={() => setOpenModal(index)}>
                                    {ngo.address}

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
                                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB2bESt_HNeVfwk0aJfQ3o9sLblIyyToeQ&q=${ngo.address}`}
                                            allowfullscreen
                                        ></iframe>
                                    </Modal>

                                </td>

                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NgoTable;