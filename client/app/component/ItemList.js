import ItemCard from "./ItemCard"

export default function ItemList() {
    const data = [
        {
            id: '0',
            name: 'Satyajit',
            plateform: 'Twitter',
            discription: 'Random person on twitter',
            url: 'https://twitter.com/0xsatyajit'
        },
        {
            id: '1',
            name: 'JitSatya',
            plateform: 'LinkedIn',
            discription: 'He writes about startup',
            url: 'https://www.linkedin.com/in/iamsatyajit'
        }
    ]

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4">
            {data.map((e) => {
                return <ItemCard data={e} />
            })}
            
        </div>
    )
}