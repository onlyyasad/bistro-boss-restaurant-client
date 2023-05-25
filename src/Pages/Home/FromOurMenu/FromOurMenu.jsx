import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionButton from "../../Shared/components/SectionButton";


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
            <SectionButton btnText="View full Menu"></SectionButton>
        </div>
    );
};

export default FromOurMenu;