import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EFFECTIVE_DATE = "September 4, 2026";

const sections: { title: string; body: JSX.Element }[] = [
  {
    title: "1. Who we are",
    body: (
      <p>
        This website is operated by JB Agile Development ("JB Agile," "we," "us," or "our"), a
        software development and consulting business based in Lahore, Pakistan. This Privacy
        Policy explains what information we collect through jb-agiledev.com, how we use it, and
        the choices you have.
      </p>
    ),
  },
  {
    title: "2. Information we collect",
    body: (
      <>
        <p>We collect information in the following ways:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Information you provide directly.</strong> When you submit our contact form,
            we collect your name, email address, company or organization name, role, and the
            message you send us.
          </li>
          <li>
            <strong>Automatically collected information.</strong> Like most websites, our hosting
            and analytics providers may automatically log standard technical data such as your IP
            address, browser type, device information, pages visited, and referring URLs, for
            security and site-performance purposes.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> We use only the minimum cookies or
            local storage needed for the site to function. We do not use advertising or
            cross-site tracking cookies.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>Respond to inquiries submitted through our contact form;</li>
          <li>Operate, maintain, and improve this website;</li>
          <li>Understand aggregate usage of the site to improve its content and performance;</li>
          <li>Meet legal, tax, and regulatory obligations.</li>
        </ul>
        <p className="mt-3">
          We do not sell your personal information, and we do not use it for advertising or
          share it with third parties for their own marketing purposes.
        </p>
      </>
    ),
  },
  {
    title: "4. How we share information",
    body: (
      <>
        <p>We share information only with:</p>
        <ul className="list-disc pl-6 space-y-2 mt-3">
          <li>
            <strong>Service providers</strong> who process data on our behalf strictly to operate
            this website, such as our form-handling provider (Formspree) and our hosting provider,
            each bound to use the information only to provide their service to us;
          </li>
          <li>
            <strong>Authorities</strong>, where required to comply with applicable law, legal
            process, or to protect our rights or the safety of others.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data retention",
    body: (
      <p>
        We retain contact-form submissions for as long as reasonably necessary to respond to your
        inquiry and maintain a record of the business relationship, and delete or anonymize them
        when no longer needed, unless a longer retention period is required by law.
      </p>
    ),
  },
  {
    title: "6. Data security",
    body: (
      <p>
        We take reasonable technical and organizational measures to protect the information we
        hold from unauthorized access, disclosure, alteration, or destruction. No method of
        transmission or storage is completely secure, so we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title: "7. International transfers",
    body: (
      <p>
        We are based in Pakistan. If you contact us from another country, your information may be
        transferred to and processed in Pakistan or in the countries where our service providers
        operate, which may have different data protection laws than your own jurisdiction.
      </p>
    ),
  },
  {
    title: "8. Your rights and choices",
    body: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or restrict
          use of your personal information, or to object to certain processing. To exercise any of
          these rights, or to ask us a question about this policy, contact us using the details
          below.
        </p>
      </>
    ),
  },
  {
    title: "9. Children's privacy",
    body: (
      <p>
        This website is intended for business audiences and is not directed at children. We do not
        knowingly collect personal information from children.
      </p>
    ),
  },
  {
    title: "10. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        for legal, operational, or regulatory reasons. We will update the effective date above when
        we do.
      </p>
    ),
  },
  {
    title: "11. Contact us",
    body: (
      <p>
        If you have questions about this Privacy Policy or how we handle your information, contact
        us at{" "}
        <a href="mailto:jawad@jb-agiledev.com" className="text-accent hover:underline">
          jawad@jb-agiledev.com
        </a>
        .
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-surface-light">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-text-dark mb-4">
              Privacy Policy
            </h1>
            <p className="font-body text-sm mb-12" style={{ color: "#52525B" }}>
              Effective date: {EFFECTIVE_DATE}
            </p>

            <div className="space-y-10 font-body text-base leading-relaxed" style={{ color: "#3F3F46" }}>
              {sections.map((s) => (
                <section key={s.title}>
                  <h2 className="font-heading text-xl font-bold text-text-dark mb-3">
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
