import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

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
                <Outlet></Outlet>
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
