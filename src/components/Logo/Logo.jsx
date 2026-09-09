import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="font-semibold text-dark-08 hover:opacity-85 duration-300" title="Docs Stater">
            <span className="block text-[22px] leading-[1.1]">Docs</span>
            <span className="block text-2xl leading-[1.1]">Stater</span>
        </Link>
    );
};

export default Logo;
