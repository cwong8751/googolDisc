import './Header.css';
const Header = () => {
    return (
        <header>
            <form>
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default Header;