

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center bg-base-100">
            <img src={image} alt="Movie" className="w-[118px] h-[104px]" />
            <div className="flex">
                <div className="card-body pr-2">
                    <div className="flex justify-between gap-2 items-center">
                        <h2 className="card-title uppercase font-normal font-cinzel">{name}</h2>
                        <hr className="border-dashed border-black flex-grow" />
                    </div>
                    <p>{recipe}</p>

                </div>
                <div className="card-body justify-end">
                    <p className="text-yellow-600">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;