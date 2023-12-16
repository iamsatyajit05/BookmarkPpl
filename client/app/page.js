import Header from "./component/Header"
import ListBar from "./component/ListBar"
import ItemList from "./component/ItemList"

export default function Home() {
    return (
        <>
            <Header />
            <main className="py-8 space-y-8">
                <ListBar />
                <ItemList />
            </main>
        </>
    )
}
