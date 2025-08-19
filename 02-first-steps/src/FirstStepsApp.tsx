import ItemCounter from "./ItemCounter";

export function FirtsStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>

            <ItemCounter name="Nintendo Switch 2" quantity={20} />
            <ItemCounter name="Pro controller" quantity={30} />
            <ItemCounter name="Super smash" quantity={10} />
        </>
    )
}