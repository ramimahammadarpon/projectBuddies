import React from 'react';

const DeveloperResources = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-gray-700">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Developer Resources
      </h1>

      <p className="mb-6 text-lg text-center">
        Everything you need to build, integrate, and extend <span className="font-semibold text-primary">Project Buddies</span>. Explore our APIs, tools, and best practices to supercharge your development experience.
      </p>

      {/* API Documentation */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">📘 API Documentation</h2>
        <p className="mb-3 text-base">
          Access our powerful RESTful APIs to interact with projects, user profiles, collaboration data, and notifications.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
            <a
              href="https://www.mongodb.com/docs/drivers/node/current/crud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Project Buddies REST API Docs
            </a>
          </li>
          <li>
            Authentication, rate limits, pagination, and error handling included.
          </li>
          <li>
            Easily test endpoints with Postman or Insomnia using our OpenAPI spec.
          </li>
        </ul>
      </div>

      {/* Developer Guides */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">📚 Developer Guides</h2>
        <p className="mb-3 text-base">
          Step-by-step guides and tutorials to help you get started quickly.
        </p>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>How to integrate Project Buddies login via OAuth2</li>
          <li>Embedding project boards in your own apps</li>
          <li>Using webhooks for real-time updates</li>
        </ul>
      </div>

      {/* SDKs and Libraries */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">🧰 SDKs & Libraries</h2>
        <p className="mb-3 text-base">
          Use our official SDKs or community-built libraries to integrate faster:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
            <span className="font-medium">JavaScript SDK:</span> npm install <code>project-buddies-sdk</code>
          </li>
          <li>
            <span className="font-medium">React Hooks:</span> Easily manage user auth and project actions
          </li>
          <li>
            <span className="font-medium">Coming soon:</span> SDKs for Python and Flutter
          </li>
        </ul>
      </div>

      {/* Sandbox Environment */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">🧪 Sandbox Environment</h2>
        <p className="text-base">
          Build and test your applications safely using our sandbox API environment. You can create dummy projects, simulate users, and test collaboration workflows without affecting real data.
        </p>
      </div>

      {/* Support */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">📞 Support & Community</h2>
        <p className="mb-2 text-base">
          Need help or want to connect with other developers? Join our community:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Project Buddies Dev Discord
            </a>
          </li>
          <li>
            Email us at{' '}
            <a href="mailto:devsupport@projectbuddies.com" className="text-primary hover:underline">
              devsupport@projectbuddies.com
            </a>
          </li>
          <li>Check our <a href="/faq" className="text-primary hover:underline">FAQ page</a> for common questions</li>
        </ul>
      </div>

      {/* Footer Note */}
      <p className="text-sm text-gray-500 mt-12 text-center">
        © {new Date().getFullYear()} Project Buddies. All rights reserved.
      </p>
    </section>
  );
};

export default DeveloperResources;
