import pic from '../assets/extra/bg-picture-wide.png?url'
import '../assets/styles/Home.css';
import { SideWindow } from "../components";

function Home() {
    return (
        <div id="home-div">
            <div className="left-sidebar"></div>
            <div className="main-content">
                <h1 id="subtitle">Software Developer</h1>
                <img id="bg-pic" src={pic}></img>
            </div>
            <div className="right-sidebar">
                <SideWindow />
            </div>
            
        </div>
    );
}

export default Home;