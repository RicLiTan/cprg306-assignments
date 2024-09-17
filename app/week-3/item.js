
export default function item(name, qty, category) {
    return (
        <div class = "meme">
            <h2 class = "text-xl font-bold">{name}</h2>
            <p class = "text-sm">Buy {qty} in {category}</p>
        </div>
    )
}