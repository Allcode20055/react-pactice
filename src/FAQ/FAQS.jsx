import React, { useState } from "react";

import style from "./faqs.module.css";
import { dataFaqs } from "./Data.js";
import FAQ from "./FAQ.jsx";

const FAQS = () => {
  const [faqs, setFaqs] = useState(dataFaqs);

  return (
    <main className={style.main}>
      <section className={style.section}>
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default FAQS;
