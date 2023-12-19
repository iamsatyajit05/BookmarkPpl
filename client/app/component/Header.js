export default async function Header({ children }) {
    return (
        <div className="border-b-2 border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 xl:px-0 py-4">
                <div className="text-xl font-bold">Bookmark Ppl</div>
                { children }
            </div>
        </div>
    )
}