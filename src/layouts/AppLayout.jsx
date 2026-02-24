import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500/30">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
