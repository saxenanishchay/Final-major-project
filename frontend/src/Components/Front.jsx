import BodyImg from "../Assets/mainimg1.jpg";
import { FaRobot, FaWindowClose } from "react-icons/fa";
import "../Styles/Front.css";
import { useContext } from "react";
import { ChatbotOpen } from "./ChatbotOpen";

function Front() {
  const { open, setOpen } = useContext(ChatbotOpen);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            AyurBot: Personalized Ayurvedic Wellness Chatbot
          </h2>
          <p className="text-descritpion">
            Discover Your Ayurvedic Balance: Experience our AI-driven chatbot
            that determines your Prakriti and offers personalized dietary
            guidance for holistic well-being.
          </p>
{/*           <button */}
{/*             className={`${ */}
{/*               open ? "text-appointment-btn-close" : "text-appointment-btn" */}
{/*             }`} */}
{/*             type="button" */}
{/*             onClick={() => setOpen(!open)} */}
{/*           > */}
{/*             {open ? <FaWindowClose size={20} /> : <FaRobot size={20} />} */}
{/*             <span>{open ? "Close" : "Open"} Chat Bot</span> */}
{/*           </button> */}

{/*           for ayurbot aryurveda knowlegde  */}

{/*            <a href="http://127.0.0.1:5000" target="_blank" rel="noopener noreferrer"> */}
{/*   <button */}
{/*     className={`${ */}
{/*       open ? "text-appointment-btn-close" : "text-appointment-btn" */}
{/*     }`} */}
{/*     type="button" */}
{/* //     onClick={() => setOpen(!open)} */}
{/*   > */}
{/*     {open ? <FaWindowClose size={20} /> : <FaRobot size={20} />} */}
{/*     <span>{open ? "Close" : "Open"} Chat Bot</span> */}
{/*   </button> */}
{/* </a> */}



<div style={{ display: 'flex', alignItems: 'center' }}>
  {/* Button to open/close Chat Bot */}
  <button
    style={{ marginRight: '30px' }}
    className={`${
      open ? "text-appointment-btn-close" : "text-appointment-btn"
    }`}
    type="button"
    onClick={() => setOpen(!open)}
  >
    {open ? <FaWindowClose size={20} /> : <FaRobot size={20} />}
    <span>{open ? "Close" : "Open"} Chat Bot</span>
  </button>

  {/* Button for Ayurbot Ayurveda knowledge */}
  <a href="http://127.0.0.1:4444" target="_blank" rel="noopener noreferrer">
    <button
      className={`${
        open ? "text-appointment-btn-close" : "text-appointment-btn"
      }`}
      type="button"
      style={{ backgroundColor: 'green', color: 'white',
        marginRight: '20px', /* Added margin to match the first button */
        transition: 'background-color 0.3s ease', /* Smooth transition */
         border: '1px solid green', // Initial border style

        }}
         onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.color = 'green';
        e.target.style.borderColor = 'green'; // Change border color on hover

      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'green';
        e.target.style.color = 'white';
        e.target.style.borderColor = 'green'; // Reset border color when leaving hover
      }}


    >
      {open ? <FaWindowClose size={20} /> : <FaRobot size={20} />}
      <span>More About Ayurveda</span>
    </button>
  </a>
</div>





        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={BodyImg} alt="Body" />
        </div>
      </div>
    </div>
  );
}
export default Front;
