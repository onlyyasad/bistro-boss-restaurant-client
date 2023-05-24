import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import first from "../../../assets/home/01.jpg"
import second from "../../../assets/home/02.jpg"
import third from "../../../assets/home/03.png"
import fourth from "../../../assets/home/04.jpg"
import fifth from "../../../assets/home/05.png"
import sixth from "../../../assets/home/06.png"

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={first} />
                
            </div>
            <div>
                <img src={second} />
                
            </div>
            <div>
                <img src={third} />
                
            </div>
            <div>
                <img src={fourth} />
                
            </div>
            <div>
                <img src={fifth} />
                
            </div>
            <div>
                <img src={sixth} />
                
            </div>
        </Carousel>
    );
};

export default Banner;