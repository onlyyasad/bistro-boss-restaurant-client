
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='w-[424px] mx-auto text-center space-y-4 mb-12'>
            <p className="font-poppins text-yellow-500">-- {subTitle} --</p>
            <hr className="border" />
            <h2 className="text-3xl font-poppins uppercase font-semibold tracking-widest">{title}</h2>
            <hr className="border" />
        </div>
    );
};

export default SectionTitle;