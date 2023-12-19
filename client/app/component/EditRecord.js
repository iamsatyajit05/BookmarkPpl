"use client"
import { useForm } from "react-hook-form";

export default function EditRecord({ profileData, isShow, setIsShow, fetchData }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        data['createdBy'] = profileData.email;
        
        try {
            const response = await fetch(`http://localhost:5000/api/profile/${profileData._id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const jsonResponse = await response.json()

            if (response.status === 200) {
                console.log(jsonResponse.message);
                fetchData();
            } else {
                throw jsonResponse.message;
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsShow(false);
            reset();
        }
    };

    return (
        isShow &&
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10  bg-[rgba(0,0,0,0.5)] flex justify-center p-8">
            <form className="h-fit bg-gray-800 p-6 rounded-lg space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <h2>Edit Profile</h2>
                <div className="flex flex-col space-y-2">
                    <input type="text"
                        className={`bg-gray-700 rounded-md p-2 outline-none border-2 border-transparent active:border-blue-700 ${errors.name ? 'border-red-700' : ''}`}
                        placeholder="Name" defaultValue={profileData.name}
                        {...register("name", { required: true })} />
                    <select type="text"
                        className={`bg-gray-700 rounded-md p-2 outline-none border-2 border-transparent active:border-blue-700 ${errors.plateform ? 'border-red-700' : ''}`} defaultValue={profileData.plateform}
                        {...register("plateform", { required: true })}>
                        <option disabled selected>Plateform</option>
                        <option value="Twitter">Twitter</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Youtube">Youtube</option>
                        <option value="Github">Github</option>
                        <option value="Blog">Blog</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="text"
                        className={`bg-gray-700 rounded-md p-2 outline-none border-2 border-transparent active:border-blue-700 ${errors.description ? 'border-red-700' : ''}`}
                        placeholder="Description" defaultValue={profileData.description}
                        {...register("description", { required: true })} />
                    <input type="text"
                        className={`bg-gray-700 rounded-md p-2 outline-none border-2 border-transparent active:border-blue-700 ${errors.url ? 'border-red-700' : ''}`}
                        placeholder="Url" defaultValue={profileData.url}
                        {...register("url", { required: true })} />
                </div>
                <div className="flex space-x-2">
                    <button className="flex-1 py-2 px-4 rounded-md" onClick={() => { setIsShow(false); reset(); }}>Close</button>
                    <button type="submit" className="flex-1 bg-blue-700 py-2 px-4 rounded-md">Save</button>
                </div>
            </form>
        </div>
    )
}