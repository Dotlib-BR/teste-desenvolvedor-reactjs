import Footer from "../../components/Footer";
import Header  from "../../components/Header";
import Sibedar from "../../components/Sidebar";
import InfoBook from "../../components/InfoBook";

import './styles.css';

function Home(){
  return(
    <div className="header_container">
      <Header />
        <div className="C_container">
            <div className="infor">
              <Sibedar />
            </div>
            <div className="gridarea">
              <h3>Monstrar 1 até 25 de 2399 resultados.</h3>
                <InfoBook />
            </div>
            <Footer />
        </div>
      
    </div>
  )
}

export default Home;