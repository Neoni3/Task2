import "./style.css";

const Header = () => {
    return (<header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Artem Zinchenko</em></strong><br />
            I frontend developer
        </h1>
        <div className="header__text">
            <p>Hello, I'm Artem Zinchenko
This site serves as my portfolio, which you can view before ordering.</p>
        </div>
    </div>
</header>
);
}
 
export default Header;