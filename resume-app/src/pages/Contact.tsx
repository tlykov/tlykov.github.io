import '../assets/styles/Home.css';
import '../assets/styles/Contact.css';
import emailIcon from '../assets/icons/email-icon.png?url';
import phoneIcon from '../assets/icons/phone-icon.png?url';
import locationIcon from '../assets/icons/location-icon.png?url';

function Contact() {
    return (
        <div id="contact-div">
            <div className="left-sidebar"></div>
            <div className="background">
                <div id="content" className="main-content">
                    <div className='flex-line'>
                        <img className='icon' src={emailIcon}/>
                        <span className="copy-text">tlykov@sfu.ca</span>
                    </div>

                    <div className='flex-line'>
                        <img className='icon' src={phoneIcon}/>
                        <span className="copy-text">604-704-2164</span>
                    </div>

                    <div className='flex-line'>
                        <img className='icon' src={locationIcon}/>
                        <span>Vancouver, Canada</span>
                    </div>
                </div>
            </div>
            <div className="right-sidebar"></div>
            
        </div>
    );
}

export default Contact;