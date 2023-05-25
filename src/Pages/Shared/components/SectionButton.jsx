

const SectionButton = ({btnText}) => {
    return (
        <div className="flex items-center justify-center">
            <button className="btn bg-white text-black border-0 border-b-2 hover:text-white">{btnText}</button>
        </div>
    );
};

export default SectionButton;