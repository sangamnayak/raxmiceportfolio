import Header from "../../public/includes/header";
import Footer from "../../public/includes/footer";
import '../../public/css/forAllPages.css'

// import ParticlesBackground from "./ParticalsBg";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <ParticlesBackground /> */}
        <Header />
        <div className="container">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
