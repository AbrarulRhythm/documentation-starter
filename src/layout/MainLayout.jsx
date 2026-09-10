import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import SiderHeader from '../pages/Shared/SiderHeader/SiderHeader';

const MainLayout = () => {
    return (
        // Main Wrapper
        <div className="main-wrtapper mt-[71.58px]">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0">
                <Header></Header>
            </header>
            {/* Header End */}

            {/* ==================== Mian ==================== */}
            <main className="site-main">
                <div className="container">
                    <div className="flex flex-wrap">
                        {/* Side Header */}
                        <div className="w-4/12">
                            <div className="bg-white border-x border-dark-03 overflow-hidden px-3 lg:px-7 hidden lg:block">
                                <SiderHeader></SiderHeader>
                            </div>
                        </div>

                        {/* Outlet */}
                        <div className="w-full lg:w-8/12">
                            <div className="border border-blue-600 px-3 lg:px-7">
                                <Outlet></Outlet>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* ==================== Mian End ==================== */}

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
            {/* Footer End */}
        </div>
        // Main Wrapper End
    );
};

export default MainLayout;
