import FoodCard from '../../../components/foodCard/FoodCard';
// TODO: implement pagination here
const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 px-24">
            {
                items.map((item) => <FoodCard
                    key={item._id}
                    item={item}

                ></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;