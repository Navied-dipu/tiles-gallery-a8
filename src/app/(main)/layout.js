import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import Navbar from "../components/Navber";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
