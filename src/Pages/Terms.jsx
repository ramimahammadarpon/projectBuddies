import React from "react";

const Terms = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Terms and Services
      </h1>

      <p className="mb-4 text-lg">
        Welcome to{" "}
        <span className="font-semibold text-primary">Project Buddies</span>. By
        accessing and using our platform, you agree to the following terms and
        conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4 text-base">
        By creating an account or using any part of our website, you agree to be
        bound by these Terms and Services. If you do not agree with any part of
        these terms, you must not use our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Eligibility</h2>
      <p className="mb-4 text-base">
        Project Buddies is intended for individuals aged 13 years and older. By
        using our service, you affirm that you are at least 13 years of age or
        have permission from a legal guardian.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        3. User Responsibilities
      </h2>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>
          You agree to provide accurate and complete information during
          registration and keep your profile updated.
        </li>
        <li>
          You are solely responsible for all content you upload or share within
          the platform.
        </li>
        <li>
          You agree not to use the platform for any unlawful or harmful
          activities.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        4. Project Collaboration
      </h2>
      <p className="mb-4 text-base">
        Project Buddies facilitates collaboration between users, but does not
        guarantee the success of any partnership or project. All communications
        and responsibilities lie between the individuals involved in the
        collaboration.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        5. Intellectual Property
      </h2>
      <p className="mb-4 text-base">
        You retain ownership of any intellectual property you create using our
        platform. However, you grant us a non-exclusive license to display
        content you publicly share for promotional or educational purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Termination</h2>
      <p className="mb-4 text-base">
        We reserve the right to suspend or terminate your account if you violate
        these Terms and Services or engage in behavior that negatively impacts
        the platform or its users.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to Terms</h2>
      <p className="mb-4 text-base">
        We may update these Terms from time to time. Continued use of the
        platform after changes indicates your acceptance of the revised terms.
        We recommend checking this page periodically for updates.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact</h2>
      <p className="text-base">
        If you have any questions regarding these Terms and Services, please
        contact us at{" "}
        <a
          href="mailto:support@projectbuddies.com"
          className="text-primary font-medium"
        >
          support@projectbuddies.com
        </a>
        .
      </p>
    </section>
  );
};

export default Terms;
