import React, { useState } from 'react';

const faqs = [
  {
    q: 'What is Spend?',
    a: 'Spend is an app for managing personal and small-business finances — track expenses, create invoices, and get simple insights.'
  },
  {
    q: 'How do I create an invoice?',
    a: 'Go to the Invoices section, tap "Create Invoice", fill in the recipient and items, then save or send.'
  },
  {
    q: 'Is my financial data secure?',
    a: 'We use industry-standard security measures to protect data. See our Privacy Policy for more details.'
  },
  {
    q: 'Can I export my data?',
    a: 'Yes — you can export invoices and transaction history from the settings or reports screen.'
  },
  {
    q: 'How can I get support?',
    a: 'Contact support via the app or email support@spend.app and we will help you.'
  }
];

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-3 bg-white flex justify-between items-center"
      >
        <span className="font-medium">{item.q}</span>
        <span className="ml-4 text-gray-500">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-gray-50 text-gray-700">
          {item.a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h1>
        <p className="text-sm text-gray-600 mt-1">Answers to common questions about Spend.</p>
      </header>

      <section className="space-y-4">
        {faqs.map((f, i) => (
          <FAQItem key={i} item={f} index={i} />
        ))}
      </section>

      <footer className="mt-8 text-sm text-gray-600">
        Still have a question? Email <a href="mailto:support@spend.app" className="text-blue-600 underline">toniSedjoah@gmail.com</a>
      </footer>
    </main>
  );
};

export default FAQ;
