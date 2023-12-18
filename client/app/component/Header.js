export default async function Header({ children }) {
    return (
        <div className="border-b-2 border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
                <div className="text-xl font-bold">Bookmark Ppl</div>
                { children }
            </div>
        </div>
    )
}