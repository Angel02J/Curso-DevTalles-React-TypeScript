import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 1 },
    { productName: 'Pro Controller', quantity: 2 },
    { productName: 'Super Smash', quantity: 5 }
];

export function FirtsStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {/* <ItemCounter name="Nintendo Switch 2" quantity={20} />
            <ItemCounter name="Pro controller" quantity={30} />
            <ItemCounter name="Super smash" quantity={10} /> */}
            {
                itemsInCart.map((item) => (
                    <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
                ))
            }
        </>
    )
}