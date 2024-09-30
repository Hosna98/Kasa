import Bannerapropos from "../components/Bannerapropos";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import aproposData from "../data/apropos.json";



const About = () => {
    return (
        <div className="about">
            <Bannerapropos />
            {aproposData.map((item, index) => (
                <Collapse key={index} title={item.title}>
                    {item.text}
                </Collapse>
            ))}

            <Footer />
        </div>
        
    );
};

export default About;

