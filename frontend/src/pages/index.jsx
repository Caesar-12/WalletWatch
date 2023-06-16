import { MdEdit } from "react-icons/md";
import Nav from "../components/Navbar";
import render from "../utils/render";
import UndrawFinance from "../assets/undraw-finance.svg";
import "../css/index.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <main className="content">
        <UndrawFinance className="illustration" />
        <div className="text-container">
          <h1 className="title">About Wallet Watch</h1>
          <p className="text">
            Effortlessly track your spending with our intuitive web app. Take
            control of your finances, monitor your expenses, and stay on top of
            your budget. Simplify your financial management and make informed
            decisions for a better financial future.
          </p>
          <a href="/signup" className="index__button">
            <MdEdit className="index__icon" />
            <span className="index_button-text">Create your account</span>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

render(<Home />);
