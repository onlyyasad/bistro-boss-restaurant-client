import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionButton from "../../Shared/components/SectionButton";


const MenuCategory = ({items, sectionImg, secHeading, title, subTitle, btnText}) => {
    return (
        <>
            {secHeading && <SectionCover sectionImg={sectionImg} secHeading={secHeading}></SectionCover>}
            {title && <SectionTitle title={title} subTitle={subTitle}></SectionTitle>}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <SectionButton btnText={btnText}></SectionButton>
        </>
    );
};

export default MenuCategory;