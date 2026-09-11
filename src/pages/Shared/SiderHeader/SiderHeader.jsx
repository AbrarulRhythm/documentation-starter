import { IoSearchSharp } from 'react-icons/io5';
import MenuItems from './MenuItems';

const SiderHeader = () => {
    return (
        <div className="py-7">
            {/* Search Button */}
            <div>
                <button className="flex items-center justify-between w-full border border-dark-03 rounded-sm py-3 px-4 mb-6 cursor-pointer hover:border-dark-06 duration-200">
                    <span>Search...</span> <IoSearchSharp className="text-lg" />
                </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
                {/* Getting Started */}
                <MenuItems
                    icon="fa-solid fa-globe"
                    mainTitle="Getting Started"
                    childItems={[
                        { text: 'Overview', link: '/' },
                        { text: 'Your First Project', link: '/your-first-project' },
                        { text: 'CLI & API Keys', link: '/cli-&-api-keys' },
                    ]}
                ></MenuItems>
            </div>
        </div>
    );
};

export default SiderHeader;
