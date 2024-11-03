import React from 'react';
import './styles.css';
import ChevronDown from '../../assets/chevron-down.svg';
import ChevronUp from '../../assets/chevron-up.svg';
import GreenCommentsIcon from '../../assets/Greencommentsicon.svg';

const FAQ = () => {
  return (
    <section id="FAQ-Desktop">
      <div className="container-desktop">
        <div className="FAQleft-desktop">
          <div className="FAQtxt-desktop">
            <div className="titleTXTFAQ-desktop">
              <p>Any questions?<br />Check out the FAQs</p>
            </div>
            <div className="subtitleTXTFAQ-desktop">
              <p>Still have unanswered questions and need to get<br /> in touch?</p>
            </div>
          </div>

          <div className="FAQiconboxes-container-desktop">
            <div className="FAQiconboxblue-desktop">
              <i className="fa-solid fa-phone-volume" style={{ color: 'blue' }}></i>
              <p>Still have questions?</p>
              <a href="#" className="btn-Blue">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right" style={{ color: 'blue' }}></i>
              </a>
            </div>

            <div className="FAQiconboxgreen-desktop">
              <img src={GreenCommentsIcon} alt="Green comments" />
              <p>Don't like phone calls?</p>
              <a href="#" className="btn-Green">
                <span>Contact us</span>
                <i className="fa-solid fa-arrow-right" style={{ color: 'green' }}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="Accordion-Desktop">
          <div className="AccordionItem">
            <p>Is any of my personal information stored in the App?</p>
            <button className="Desktopchevron-down">
              <img src={ChevronDown} alt="Chevron-down" />
            </button>
          </div>

          <div className="AccordionItem">
            <p>What formats can I download my transaction history in?</p>
            <button className="Desktopchevron-down">
              <img src={ChevronDown} alt="Chevron-down" />
            </button>
          </div>

          <div className="AccordionItem open">
            <div className="open-panel-header">
              <p>Can I schedule future transfers?</p>
              <button className="Desktopchevron-up">
                <img src={ChevronUp} alt="Chevron-up" />
              </button>
            </div>
            <div className="open-panel-body">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
          </div>

          <div className="AccordionItem">
            <p>When can I use Banking App services?</p>
            <button className="Desktopchevron-down">
              <img src={ChevronDown} alt="Chevron-down" />
            </button>
          </div>

          <div className="AccordionItem">
            <p>Can I create my own password that is easy for me to remember?</p>
            <button className="Desktopchevron-down">
              <img src={ChevronDown} alt="Chevron-down" />
            </button>
          </div>

          <div className="AccordionItem">
            <p>What happens if I forget or lose my password?</p>
            <button className="Desktopchevron-down">
              <img src={ChevronDown} alt="Chevron-down" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
