
const MenuItem = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex space-x-2 items-center">
            <img className="w-[100px] h-[90px] rounded-e-full rounded-b-full" src={image} alt={name} />
            <div>
                <h3 className="uppercase font-semibold text-secondary">{name}----------</h3>
                <p className="md:w-4/5">{recipe}</p>
            </div>
                <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;