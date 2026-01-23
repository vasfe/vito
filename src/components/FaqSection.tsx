"use client";

import faqData from "@/properties/faq.json";

const FaqSection = () => {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        <h2 className="fs-2 text-uppercase fw-bold text-center mb-5">
          {faqData.title}
        </h2>
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="accordion" id="faqAccordion">
              {faqData.questions.map((q, index) => (
                <div className="accordion-item" key={q.question}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button rounded fs-5 ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {q.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    {q.answer && (
                      <div className="accordion-body ps-4">{q.answer}</div>
                    )}
                    {q.answers?.map((a) => (
                      <div className="accordion-body ps-4" key={a.header}>
                        <strong>{a.header}</strong>{": "} 
                        {a.paragraph}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
