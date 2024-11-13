import React, { useEffect, useState } from 'react';
import './styles.css';
import ChevronDown from '../../assets/chevron-down.svg';
import ChevronUp from '../../assets/chevron-up.svg';
import GreenCommentsIcon from '../../assets/Greencommentsicon.svg';
import { fetchFAQ } from '../../services/apiService';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchFAQ()
      .then(data => {
        setFaqs(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>Error loading FAQs: {error.message}</p>;

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
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`AccordionItem ${openIndex === index ? 'open' : ''}`}
            >
              <div className="AccordionItemHeader" onClick={() => toggleFAQ(index)}>
                <p>{faq.title}</p>
                <button className="AccordionToggle">
                  <img
                    src={openIndex === index ? ChevronUp : ChevronDown}
                    alt="Chevron"
                  />
                </button>
              </div>
              {openIndex === index && (
                <div className="open-panel-body">
                  <p>{faq.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
