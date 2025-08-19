
interface Props {
    name: string;
    quantity?: number;
}

const ItemCounter = ({ name, quantity }: Props) => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10
        }}>
            <span
                style={{
                    width: 150
                }}
            >{name}</span>
            <button>+</button>
            <span>{quantity}</span>
            <button>-1</button>
        </section>
    )
}

export default ItemCounter 