import { createRoot } from 'react-dom/client';
import './styles.css';
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
    return (
        <div className="q">
            <div className="block">asdasdas</div>
        </div>
    );
};

root.render(<App />);
