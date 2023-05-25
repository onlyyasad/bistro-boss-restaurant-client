import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const FromOurMenu = () => {
    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/popular')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div>
            <SectionTitle title={"From Our Menu"} subTitle={"Popular Items"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center">
                <button className="btn bg-white text-black border-0 border-b-2 hover:text-white">View Full Menu</button>
            </div>
        </div>
    );
};

export default FromOurMenu;