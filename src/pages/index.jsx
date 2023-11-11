import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Page = () => {
  return (
    <Container className="mt-3">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Welcome!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Welcome to Store Data v3! This project marks my foray into backend programming.
          It embodies the fundamental CRUD principles through a product inventory system. Notably,
          in version 3, the project leverages Next.js and React. To witness its functionality,
          kindly click the &quot;Get Started&quot; button.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button
              className="btn btn-primary btn-lg px-4 gap-3"
              href="/products"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
