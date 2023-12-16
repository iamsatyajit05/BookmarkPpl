export default function ItemCard({ data }) {
    return (
        <div key={data.id} className="bg-gray-800 rounded-lg">
            <a className="block p-4 space-y-2" href={data.url} target="_blank">
                <p className="flex justify-between">
                <span>{data.name}</span>
                <span>{data.plateform}</span>
                </p>
                <p className="text-sm">{data.discription}</p>
            </a>
        </div>
    )
}