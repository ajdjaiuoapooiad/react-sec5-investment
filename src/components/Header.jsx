import logo from "../assets/investment-calculator-logo.png";

function Header(){
    return(
        <header id="header">
            <img src={logo} alt="Logo showing money bag" />
            <h1>Investment Culculator</h1>

        </header>
    );
};
export default Header;