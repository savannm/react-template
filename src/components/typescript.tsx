function Demo() {
    //First, setup Types
    //array
    type typeDrink = string[];
    //object
    type typeMenu = {
        name: string
        price: number
        stock: number
    }
    type typeDrinkQueue = [{
        Menu: typeMenu,
        id: number,
        status: string,
    }]

    //main code
    const drinkName: typeDrink = ["beer", "wine", "cider"];
    let drinkOrder: typeMenu = {
        name: "2",
        price: 10,
        stock: 1,
    }
    let drinkQueue: typeDrinkQueue = [{
        Menu: {
            name: "beer",
            price: 10,
            stock: 1,
        },
        id: 1,
        status: "ordered",
    }]

    return (
        <div>
            <h1>Type Demo</h1>
            <p>{drinkQueue[0].Menu.name}</p>
            <p id="alldrinks"></p>
            <button onClick={() => {
                //adds new drink to queue
                drinkQueue.push({
                    Menu: { name: "beer", price: 10, stock: 1 }, id: 2, status: "ordered"
                })
                document.getElementById("alldrinks").innerHTML = drinkQueue[0].Menu.name;
            }
            }>submit</button>
        </div >
    )
}

export default function TypeDemo() {
    return (
        < Demo />
    )
}