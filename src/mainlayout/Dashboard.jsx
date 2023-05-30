import React from 'react';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here  */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to='/dashboard/home'> <FaHome /> User Home </NavLink></li>
                        <li><NavLink to='/dashboard/reservation'> <FaCalendarAlt /> Reservations </NavLink></li>
                        <li><NavLink to='/dashboard/history'> <FaWallet /> Payment History </NavLink></li>
                        <li>
                            <NavLink to='/dashboard/mycart'> <FaShoppingCart /> My Cart
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </NavLink>

                        </li>
                        <div className="divider"></div>
                        {/* li*4>NavLink */}
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/menu'>Our Menu</NavLink></li>
                        <li><NavLink to='/order/salad'>Order Food</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;