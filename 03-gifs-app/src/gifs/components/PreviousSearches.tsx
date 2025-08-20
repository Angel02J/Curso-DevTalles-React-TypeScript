interface Props {
    title: string;
}

export const PreviousSearches = ({ title }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                <li>Goku</li>
                <li>Saitama</li>
                <li>Elden Ring</li>
            </ul>
        </div>
    )
}
