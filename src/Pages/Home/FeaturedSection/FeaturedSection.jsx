import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"


const FeaturedSection = () => {
    return (
        <div style={{ backgroundImage: `url("${featuredImg}")`, backgroundPosition: "center", backgroundAttachment: "fixed" }}>
            <div className="hero">
                <div className="hero-overlay bg-opacity-60">
                    <div className="p-20">
                        <SectionTitle title={"Featured Menu"} subTitle={"Check Featured Item"}></SectionTitle>
                        <div className="hero-content flex-col text-white lg:flex-row">
                            <img src={featuredImg} className="max-w-sm" />
                            <div className="">
                                <p>May 24,  2023</p>
                                <h2 className="text-xl">Where can I get some?</h2>
                                <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sapiente commodi necessitatibus quasi possimus molestias quaerat, corporis, maxime exercitationem, ratione neque repellat? Sequi at quis reprehenderit voluptatibus officiis blanditiis quia fugit. Exercitationem, hic odit a, natus eveniet, doloremque placeat repellat illum aliquid voluptas sequi dignissimos expedita quisquam tempore! Unde, corporis.</p>
                                <button className="btn bg-opacity-0 text-black border-0 border-b-2 text-white">View Full Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;