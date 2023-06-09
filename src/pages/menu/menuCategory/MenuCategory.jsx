import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {

    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16 md:px-24 px-5">
                {
                    items.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-5">order now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;