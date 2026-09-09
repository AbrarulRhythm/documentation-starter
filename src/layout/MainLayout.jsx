import { Outlet } from 'react-router';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        // Main Wrapper
        <div className="main-wrtapper container bg-white border-x border-dark-03">
            {/* Header */}
            <header>
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
