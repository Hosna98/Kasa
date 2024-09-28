import Bannerapropos from "../components/Bannerapropos";
import Collapse from "../components/Collapse";
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
        </div>
        
    );
};

export default About;