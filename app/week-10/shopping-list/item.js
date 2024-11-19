
export default function item(items, sort, onSelect) {
    const displayedItems = items.sort((a, b) => a.name.localeCompare(b.name))
    if (sort == "name")
    {
        const displayedItems = items.sort((a, b) => a.name.localeCompare(b.name))
    }

    else if (sort == "category")
    {
        const displayedItems = items.sort((a, b) => a.category.localeCompare(b.category))
    }

    return (
        <ul>
            {displayedItems.map((list) => (
                <li key={list.id} className = "p-2 m-4 bg-slate-900 max-w-sm hover:cursor-pointer hover:bg-blue-500" onClick = {() => onSelect(list.name)}>
                    <h2 className = "text-xl font-bold">{list.name}</h2>
                    <p className = "text-sm">Buy {list.quantity} in {list.category}</p>
                </li>
            ))}
        </ul>
    )
}