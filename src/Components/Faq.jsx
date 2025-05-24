import React, { use } from "react";

const faqPromise = fetch("/faq.json").then((res) => res.json());

const Faq = () => {
  const faqData = use(faqPromise);
  return (
    <div className="mt-5 md:mt-6 lg:mt-10 mx-3 md:mx-16 lg:mx-24">
      <h1 className="text-xl md:text-xl lg:text-3xl text-primary font-bold text-left md:text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 mt-3">
        {faqData.map((data) => (
          <div key={data.id}>
            <div className="collapse collapse-plus bg-base-100 border border-primary">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                {data.question}
              </div>
              <div className="collapse-content text-sm">{data.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
