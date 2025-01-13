import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFAQ } from '../../features/departments/faqSlice'; // Adjust the path as needed

const FAQList = () => {
  const dispatch = useDispatch();
  
  // Fetch the FAQ data and activeFAQ state from Redux
  const { faqData, activeFAQ } = useSelector((state) => state.faq);

  // Toggle the active FAQ
  const toggleShow = (id) => {
    dispatch(setActiveFAQ(id === activeFAQ ? null : id)); // Toggle between showing and hiding
  };

  // FAQItem Component
  const FAQItem = ({ id, question, answer, show, toggleShow }) => (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${show ? '' : 'collapsed'}`}
          type="button"
          onClick={() => toggleShow(id)}
          aria-expanded={show ? 'true' : 'false'}
          aria-controls={`collapse${id}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${show ? 'show' : ''}`}
        aria-labelledby={`heading${id}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );

  return (
    <div className="my-4" >
      <h2 className="text-center text-secondary pb-3">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion" >
        {faqData.map(({ id, question, answer }) => (
          <FAQItem
            key={id}
            id={id}
            question={question}
            answer={answer}
            show={activeFAQ === id}
            toggleShow={toggleShow}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
