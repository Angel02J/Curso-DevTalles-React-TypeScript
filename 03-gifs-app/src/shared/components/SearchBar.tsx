interface Props {
    placeholder: string;
    textButton: string;
}

export const SearchBar = ({ placeholder = 'Buscar', textButton }: Props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={placeholder} />
            <button>{textButton}</button>
        </div>
    )
}
