import Navbar from "@components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      {children}
      {/* <footer>footer</footer> */}
    </div>
  );
}
