
const FoodCard = ({ item }) => {

    const { image, name, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="font-semibold bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2 py-1 rounded-md">Price $: {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-5">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;