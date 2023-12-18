"use client"

import { useEffect, useState } from "react";

import ListBar from "./ListBar";
import ItemCard from "./ItemCard";

export default function MainBody({ email }) {
    const [profileData, setProfileData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/profile/${email}`, {
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
        }
    }

    const searchKeyword = async (query) => {
        try {
            const response = await fetch(`http://localhost:5000/api/profile/search/${query}`, {
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
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="py-8 space-y-8">
            <ListBar email={email} fetchData={fetchData} searchKeyword={searchKeyword} />
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
                {profileData.map((e) => {
                    return <ItemCard data={e} fetchData={fetchData} />
                })}
            </div>
        </main>
    )
}