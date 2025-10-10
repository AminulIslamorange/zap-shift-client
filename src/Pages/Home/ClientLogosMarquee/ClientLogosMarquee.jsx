import logo1 from '../../../assets/brands/casio.png'
import logo2 from '../../../assets/brands/amazon.png'
import logo3 from '../../../assets/brands/amazon_vector.png'
import logo4 from '../../../assets/brands/moonstar.png'
import logo5 from '../../../assets/brands/randstad.png'
import logo6 from '../../../assets/brands/start-people 1.png'
import logo7 from '../../../assets/brands/start.png'
import Marquee from 'react-fast-marquee'
    
const ClientLogosMarquee = () => {
    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7
    ];

    return (
        <div className="py-10 bg-white rounded-[24px] overflow-hidden">
            <Marquee
                speed={50}
                direction="left"
                gradient={false}
                pauseOnHover={true}  
            >
                {logos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-10 transition-transform duration-300 hover:scale-110"
                    >
                        <img
                            src={logo}
                            alt={`Company ${index + 1}`}
                            className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                            style={{
                                width: "123px",
                                height: "24px",
                                aspectRatio: "41/8"
                            }}
                        />
                    </div>
                ))}
            </Marquee>
            <div>
                <hr className="border-t-2 border-dashed border-[#03464D] my-8" />
            </div>
        </div>
    );
};

export default ClientLogosMarquee;
