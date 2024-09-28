import logoFooter from "../assets/image/Logo.png";


const Footer = () => {
    return (
        <footer className="footer">
            <img src={logoFooter} alt="Kasa logo" className="footer-logo" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </footer>
    );
};

export default Footer;