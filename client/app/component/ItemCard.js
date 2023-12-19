"use client"
import { useState } from "react"
import EditRecord from "./EditRecord";
import { Twitter, LinkedIn, Youtube, Github, Instagram, Book, Other, EditIcon, DeleteIcon, ViewIcon } from './Svg';

export default function ItemCard({ data, fetchData }) {
    const [isShow, setIsShow] = useState(false);

    const plateformIcon = (plateform) => {
        switch (plateform) {
            case 'Twitter':
                return Twitter;

            case 'LinkedIn':
                return LinkedIn;

            case 'Youtube':
                return Youtube;

            case 'Github':
                return Github;

            case 'Instagram':
                return Instagram;

            case 'Blog':
                return Book;

            default:
                return Other;
        }
    }

    const deleteRecord = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/profile/${id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const jsonResponse = await response.json()

            if (response.status === 200) {
                console.log(jsonResponse.message);
                fetchData();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div key={data._id} className="group relative bg-gray-800 rounded-lg">
                <a className="hidden sm:block h-full p-4 space-y-2" href={data.url} target="_blank">
                    <span className="flex items-center space-x-2">
                        <span>{data.name}</span>
                        <span>{plateformIcon(data.plateform)}</span>
                    </span>
                    <p className="text-sm">{data.description}</p>
                </a>
                <div className="block sm:hidden h-full p-4 space-y-2" target="_blank">
                    <div className='group-focus:hidden'>
                        <span className="flex items-center space-x-2">
                            <span>{data.name}</span>
                            <span>{plateformIcon(data.plateform)}</span>
                        </span>
                        <p className="text-sm">{data.description}</p>
                    </div>
                    <div className='gap-2 hidden group-hover:flex m-0'>
                        <a className='flex justify-center flex-1 h-fit rounded-lg bg-slate-500 hover:bg-slate-600 cursor-pointer' href={data.url} target="_blank">{ViewIcon}</a>
                        <span className='flex justify-center flex-1 h-fit rounded-lg bg-slate-500 hover:bg-slate-600 cursor-pointer'
                            onClick={() => setIsShow(true)}>{EditIcon}</span>
                        <span className='flex justify-center flex-1 h-fit rounded-lg bg-red-500 hover:bg-red-600 cursor-pointer'
                            onClick={() => deleteRecord(data._id)}>{DeleteIcon}</span>
                    </div>
                </div>
                <div className='hidden absolute top-2 right-2 group-hover:sm:block space-y-1'>
                    <span className='block h-fit rounded-lg bg-slate-500 hover:bg-slate-600 cursor-pointer'
                        onClick={() => setIsShow(true)}>{EditIcon}</span>
                    <span className='block h-fit rounded-lg bg-red-500 hover:bg-red-600 cursor-pointer'
                        onClick={() => deleteRecord(data._id)}>{DeleteIcon}</span>
                </div>
            </div>
            <EditRecord isShow={isShow} setIsShow={setIsShow} profileData={data} fetchData={fetchData} />
        </>
    )
}