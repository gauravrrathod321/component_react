import Header  from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Abc from "./components/Abc";
import Userslist from "./components/Userslist";

function App() {
  const employee = {
    id :101,
    name :"virat",
    email:"virat12@gmail.com"
  }
  return (
    // <div>
    // <h1>i am div method</h1>
    // <h2>i am multi time used</h2>
    // </div>
    <>
    <h1>I am comp</h1>

    <Header name="Jorden Walke"></Header>
    <Footer empdata={employee}></Footer>
    <Navbar gmail="jorden123@gmial.com"></Navbar>
    <Abc></Abc>
    <Userslist/>
    </>
   
  );
}
export default App;
