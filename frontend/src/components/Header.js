import './Header.css';
const Header = () => {
    return (
        <header>
            <h1>Googol Disc</h1>
            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default Header;