import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DonorTable from "./ListingRequests";
import ListingTable from "./ListingTable";
import NgoTable from "./NGOtable";
import { GET_ALL_DONORS, GET_ALL_NGOS } from "../Utils/constant";
function Dashboard() {

    const [donors, setDonors] = useState([]);
    const [listings, setListings] = useState([]);
    const [ngos, setNgos] = useState([]);
    const [totalListings, setTotalListings] = useState(0);
    const [donorsOnClick, setDonorsOnClick] = useState(false);
    const [listingOnClick, setListingOnClick] = useState(false);
    const [ngoTableOnCLick, setNgosTableOnCLick] = useState(false);
    const [count, setCount] = useState(0);
    const [listingCount, setListingCount] = useState(0);
    const [ngoCount, setNgoCount] = useState(0);
    const ngosCount = Object.keys(ngos).length;

    const donorsCount = Object.keys(donors).length;
    useEffect(() => {
        if (count < donorsCount) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 50); 
            return () => clearTimeout(timer);

        }
        if (listingCount < totalListings) {
            const timer = setTimeout(() => {
                setListingCount(listingCount + 1);
            }, 50); 
            return () => clearTimeout(timer);
        }
        if (ngoCount < ngosCount) {
            const timer = setTimeout(() => {
                setNgoCount(ngoCount + 1);
            }, 50); 
            return () => clearTimeout(timer);
        }
    }, [count, donorsCount, listingCount, totalListings, ngoCount, ngosCount]);

    useEffect(() => {
        axios.get(`${GET_ALL_DONORS}`)
            .then(response => {
                setDonors(response.data);
                setListings(response.data.listings);
                setTotalListings(response.data.reduce((total, donor) => total + donor.listings.length, 0));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

    }, []);
    useEffect(() => {
        axios.get(`${GET_ALL_NGOS}`)
            .then(response => {
                setNgos(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

    }, []);
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-1 sm:px-8 bg-white ">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-custom-color  border-b border-custom-color text-center">Touch the Dashboard to expand. </h2>
                <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div class="p-4 bg-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                        </path>
                    </svg></div>
                    <button onClick={() => {
                        setDonorsOnClick(!donorsOnClick);
                    }}>


                        <div class="px-4 text-gray-700">
                            <h3 class="text-sm tracking-wider">Total Available Donors</h3>
                            <p class="text-3xl text-left">{count}</p>

                        </div>
                    </button>
                </div>
                <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div class="p-4 bg-blue-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                        </path>
                    </svg></div>
                    <button onClick={() => {
                        setListingOnClick(!listingOnClick);
                    }}>
                        <div class="px-4 text-gray-700">
                            <h3 class="text-sm tracking-wider">Total Available Donor listings</h3>
                            <p class="text-3xl text-left">{listingCount}</p>
                        </div>

                    </button>
                </div>
                <div class="flex items-center bg-white border rounded-sm overflow-hidden shadow">
                    <div class="p-4 bg-indigo-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                        </path>
                    </svg></div>
                    <button onClick={() => {
                        setNgosTableOnCLick(!ngoTableOnCLick);
                    }}>
                        <div class="px-4 text-gray-700">
                            <h3 class="text-sm tracking-wider">Total NGOs</h3>
                            <p class="text-3xl text-left"> {ngoCount}</p>

                        </div>
                    </button>

                </div>
                <span className="text-s md:text-s font-bold tracking-tight text-custom-color  border-b border-custom-color text-center">Click on Address to open map view, on phone to call and email to mail.</span>
                {donorsOnClick && (
                    <DonorTable donors={donors} />

                )}
                {listingOnClick && (
                    <ListingTable donors={donors} />

                )}
                {ngoTableOnCLick && (
                    <NgoTable ngos={ngos} />

                )}

            </div>
        </div>
    )
}
export default Dashboard