import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateWallet from './views/CreateWallet/CreateWallet';
import MyWallets from './views/MyWallets/MyWallets';
import NotFoundPage from './views/NotFoundPage/NotFoundPage.jsx';
import Header from './components/Header/Header';
import CategoryCard from './components/Categories/CategoryCard/CategoryCard';

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/createwallet" element={<CreateWallet />} />
                <Route path="/MyWallets" element={<MyWallets />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <div className="q">
                <div className="block">asdasdas</div>
            </div>
        </>
    );
};

export default App;
