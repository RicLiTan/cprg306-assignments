import { itemlist } from "./item-list"

export default function Page() {
    var list = itemlist()
    var groceryList = []
    for (const item of list) {
        groceryList.push(<li class = "p-2 m-4 bg-slate-900 max-w-sm">{item}</li>)
    }
    return (
        <main>
            <h1 class="text-3xl font-bold m-2">Shopping List</h1>
            <ul>
                {groceryList}
            </ul>
        </main>
    )
}