import NavbarTop from '@/components/layout/navbar-top';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/nav-bar';

const Component = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>

      <main className="container-fluid">
        {children}
      </main>

      <Footer className="mt-auto" />
    </div>
  );
};

export default Component;
