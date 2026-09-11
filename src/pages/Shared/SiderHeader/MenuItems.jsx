import { NavLink } from 'react-router';

const MenuItems = ({ icon, mainTitle, childItems = [] }) => {
    return (
        <ul>
            <li>
                <div>
                    {/* Main Toggle Button Link */}
                    <NavLink to="/" className="block text-lg font-medium text-dark-08 mb-3 cursor-pointer hover:text-dark-06 duration-150">
                        <div className="flex items-center space-x-2">
                            <i className={`${icon} text-base`}></i> <span>{mainTitle}</span>
                        </div>
                        <div></div>
                    </NavLink>

                    {/* Child Menu */}
                    <div>
                        <ul className="ml-6 side-menu-child">
                            {childItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.link}
                                        className="py-1.5 px-4.5 block bg-white border-l-2 rounded-r-sm border-dark-03 hover:bg-dark-02 hover:text-dark-08"
                                    >
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    );
};

export default MenuItems;
