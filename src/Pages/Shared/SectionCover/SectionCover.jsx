

const SectionCover = ({chefServiceImg}) => {
    return (
        <div className="hero h-[450px]" style={{ backgroundImage: `url("${chefServiceImg}")` }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content bg-black bg-opacity-50 text-center text-neutral-content">
                <div className="max-w-4xl p-10">
                    <h1 className="mb-5 text-5xl font-cinzel">Bistro Boss</h1>
                    <p className="mb-5 font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default SectionCover;