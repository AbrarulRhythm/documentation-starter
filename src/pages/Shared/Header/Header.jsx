import Logo from '../../../components/Logo/Logo';

const Header = () => {
    return (
        <div className="container bg-white border-x border-b border-dark-03 py-2.5">
            <div className="flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center space-x-4 lg:space-x-6">
                    <Logo></Logo>
                    <span className="text-[10px] lg:text-sm text-dark-07 bg-dark-02 rounded-sm py-1 px-2">v-1.0.0</span>
                </div>

                {/* Right Side */}
                <div>
                    <button className="button">Support</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
