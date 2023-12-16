"use client"

import { useState } from "react"

export default function ListBar() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="max-w-7xl mx-auto flex justify-between space-x-4">
            <input type="text" className="w-[86%] bg-gray-800 rounded-md p-4" placeholder="Write Something To Search" />
            <button className="bg-blue-700 py-2 px-4 rounded-md" onClick={() => { setIsShow(true) }}>Add New Person</button>
            {isShow &&
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-center p-8">
                    <div className="h-fit bg-gray-800 p-6 rounded-lg space-y-4">
                        <h2>Add New Person</h2>
                        <div className="flex flex-col space-y-2">
                            <input type="text" className="bg-gray-700 rounded-md p-2" placeholder="Name" />
                            <input type="text" className="bg-gray-700 rounded-md p-2" placeholder="Plateform" />
                            <input type="text" className="bg-gray-700 rounded-md p-2" placeholder="Description" />
                            <input type="text" className="bg-gray-700 rounded-md p-2" placeholder="Url" />
                        </div>
                        <div className="flex space-x-2">
                            <button className="flex-1 py-2 px-4 rounded-md" onClick={() => { setIsShow(false) }}>Close</button>
                            <button className="flex-1 bg-blue-700 py-2 px-4 rounded-md" onClick={() => { setIsShow(true) }}>Save</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}