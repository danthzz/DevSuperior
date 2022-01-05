import DataTable from "componentes/DataTable";
import Footer from "componentes/footer";
import NavBar from "componentes/navbar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola Mundo</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
