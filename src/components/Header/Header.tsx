import React from 'react';

const Header = ({ children }: any) => {
    let q: Number;
    return (
        <header>
            <div>HEEADER</div>
            {children}
        </header>
    );
};

export default Header;
