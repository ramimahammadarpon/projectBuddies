import React from "react";

const Privacy = () => {
  return (
   <section className="max-w-4xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4 text-lg">
        At <span className="font-semibold text-primary">Project Buddies</span>, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p className="mb-2 text-base">
        When you use our platform, we may collect the following types of information:
      </p>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Personal information such as your name, email, and profile data</li>
        <li>Project details and communications between users</li>
        <li>Usage data including pages visited, features used, and device information</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4 text-base">
        We use your data to provide a secure and personalized experience. This includes:
      </p>
      <ul className="list-disc list-inside space-y-2 text-base">
        <li>Facilitating project collaboration and communication</li>
        <li>Improving the functionality and performance of our platform</li>
        <li>Responding to your inquiries or customer support requests</li>
        <li>Sending you important updates and optional promotional content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Data Protection</h2>
      <p className="mb-4 text-base">
        We implement appropriate technical and organizational measures to secure your data. While we strive to protect your information, no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Sharing Information</h2>
      <p className="mb-4 text-base">
        We do not sell or rent your personal data to third parties. We may share your data with trusted service providers who help us operate our platform — but only to the extent necessary and under strict confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Cookies</h2>
      <p className="mb-4 text-base">
        We use cookies and similar technologies to enhance your user experience, analyze site usage, and personalize content. You can choose to disable cookies through your browser settings, though this may affect platform functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Your Rights</h2>
      <p className="mb-4 text-base">
        You have the right to access, correct, or delete your personal data. You can update your profile information anytime from your account settings or reach out to us for any concerns regarding your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Updates to Privacy Policy</h2>
      <p className="mb-4 text-base">
        We may update this Privacy Policy periodically. We encourage you to review this page from time to time. Continued use of our platform indicates your acceptance of any updated policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
      <p className="text-base">
        If you have any questions or concerns about our Privacy Policy, feel free to contact us at{' '}
        <a href="mailto:privacy@projectbuddies.com" className="text-primary font-medium">
          privacy@projectbuddies.com
        </a>.
      </p>
    </section>
  );
};

export default Privacy;
