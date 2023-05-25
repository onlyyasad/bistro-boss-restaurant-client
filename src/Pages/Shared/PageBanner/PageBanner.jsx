

const PageBanner = ({bannerImg, pageTitle, pageSubTitle}) => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${bannerImg}")` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content w-4/5 bg-black bg-opacity-50 text-center text-neutral-content">
                <div className="py-20 px-10">
                    <h1 className="mb-5 text-6xl font-bold uppercase font-cinzel">{pageTitle}</h1>
                    <p className="text-xl font-cinzel">{pageSubTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;