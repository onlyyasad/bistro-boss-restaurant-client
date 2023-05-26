

const TabCard = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card card-compact rounded-none w-full bg-base-200">
            <figure><img src={image} alt="food" /></figure>
            <p className="bg-slate-900 px-4 py-2 absolute top-4 right-4 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-base-300 text-black border-0 border-b-2 border-yellow-600 hover:text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default TabCard;