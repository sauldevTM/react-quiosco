import Modal from "react-modal";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useQuiosco } from "../hooks";
import { ModalProducto, Resumen, Sidebar } from "../components";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Layout() {
  const { modal } = useQuiosco();

  return (
    <>
      <div className="md:flex">
        <Sidebar />

        <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet />
        </main>

        <Resumen />
      </div>

      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  );
}

export default Layout;
