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

    const users: User[] = [
        { username: "john_doe", role: "member" },
        { username: "jane_doe", role: "admin" },
        { username: "guest_user", role: "guest" }
    ];

    function fetchUserDetails(username: string) {
        const user = users.find(user => user.username === username)
        if (!user) {
            throw new Error(`User with username ${username} not found`)
        }
        return user
    }

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
                const Drinks: Array<string> = drinkQueue.map(drinkQueue => drinkQueue.Menu.name);
                document.getElementById("alldrinks").innerHTML = Drinks;
            }
            }>submit</button>

            <button onClick={() => {
                const user_found = fetchUserDetails("john_doe");
                document.getElementById("alldrinks").innerHTML = user_found.username;
            }}>
                get user
            </button>
        </div >
    )
}

export default function TypeDemo() {
    return (
        < Demo />
    )
}