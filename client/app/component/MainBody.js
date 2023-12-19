"use client"

import { useEffect, useState } from "react";

import ListBar from "./ListBar";
import ItemCard from "./ItemCard";

export default function MainBody({ email }) {
    const [isLoading, setIsLoading] = useState(true);
    const [profileData, setProfileData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const fetchData = async () => {
        setIsLoading(true);

        let url;
        if (inputValue === '') {
            url = `http://localhost:5000/api/profile/${email}`
        } else {
            url = `http://localhost:5000/api/profile/${email}/search/${inputValue}`
        }

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const jsonResponse = await response.json()

            if (response.status === 200) {
                setProfileData(jsonResponse);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="py-8 space-y-8">
            <ListBar email={email} fetchData={fetchData} setInputValue={setInputValue} />
            <div>
                {isLoading && <p className="text-center w-full">Loading...</p>}
                {profileData.length === 0 && !isLoading && <p className="text-center w-full">No Profile Found 😞</p>}
            </div>
            {
                profileData && <div className=" max-w-7xl mx-auto px-4 md:px-10 xl:px-0 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {profileData.map((e) => {
                        return <ItemCard data={e} fetchData={fetchData} />
                    })}
                </div>
            }
        </main>
    )
}