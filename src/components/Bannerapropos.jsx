import img from "../assets/image/IMG_ABOUT.png"

const Bannerapropos = () => {
    return (
        <div className="banner">
          <img src={img} alt="montagnes" className="bannerImg" />
          <div className="mask"></div>
        </div>
      );
    };

export default Bannerapropos;