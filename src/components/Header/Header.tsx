import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledMenu, MenuItem } from './StyledHeader';

const Header = ({ children }: any) => {
    return (
        <StyledHeader>
            <StyledMenu>
                <MenuItem>
                    <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/createwallet">Create Wallet</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/MyWallets">My Wallets</Link>
                </MenuItem>
            </StyledMenu>
        </StyledHeader>
    );
};

export default Header;
