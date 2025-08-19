import type { CSSProperties } from "react";

const firstName = 'Jose';
const lastName = 'Lugo';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gears'];
const isActive = true;

const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}

const MyAwesomeApp = () => {



    return (
        <>
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No activo'}</h1>

            <p
                style={myStyles}
            >
                {JSON.stringify(address)}
            </p>
        </>
    )
}

export default MyAwesomeApp