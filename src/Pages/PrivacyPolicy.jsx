
import React from 'react';

const PrivacyPolicy = () => {
	return (
		<main className="max-w-4xl mx-auto p-6 md:p-12 text-gray-800">
			<header className="mb-8">
				<h1 className="text-3xl md:text-4xl font-extrabold mb-2">Privacy Policy</h1>
				<p className="text-sm text-gray-600">Last updated: June 10, 2026</p>
			</header>

			<section className="space-y-6">
				<p>
					Welcome to Spend. Your privacy matters to us. This Privacy Policy explains
					what information we collect, how we use it, and the choices you have.
				</p>

				<article>
					<h2 className="text-xl font-semibold mb-2">1. Information we collect</h2>
					<ul className="list-disc pl-5 text-gray-700 space-y-1">
						<li>
							Account information: when you create an account we may collect your name,
							email address, and any profile information you supply.
						</li>
						<li>
							Transaction & financial data: if you use invoicing or payment features,
							we may store invoices, amounts, dates and related metadata required to
							provide the service.
						</li>
						<li>
							Usage data: analytics data such as pages viewed, actions taken, and
							device/browser information to improve the app.
						</li>
					</ul>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">2. How we use your information</h2>
					<p className="text-gray-700">
						We use information to operate, maintain, and improve the service, to
						provide customer support, and to process transactions. We do not sell
						personal data to advertisers.
					</p>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">3. Cookies and tracking</h2>
					<p className="text-gray-700">
						We and our third-party partners may use cookies and similar technologies
						for analytics and to provide essential functionality. You can control
						cookie preferences through your browser settings.
					</p>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">4. Third-party services</h2>
					<p className="text-gray-700">
						We may share data with third-party providers who help with analytics,
						payments, and cloud hosting. These providers are contractually required
						to protect your data and use it only to perform services for us.
					</p>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">5. Data security</h2>
					<p className="text-gray-700">
						We implement reasonable technical and organizational measures to protect
						personal data. However, no method of transmission over the internet is
						100% secure — if you believe your account has been compromised, contact us.
					</p>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">6. Children's privacy</h2>
					<p className="text-gray-700">
						The service is not intended for children under 13. We do not knowingly
						collect personal information from children under 13. If you believe we
						have such data, please contact us to request deletion.
					</p>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">7. Changes to this policy</h2>
					<p className="text-gray-700">
						We may update this policy from time to time. We will post changes here
						with an updated effective date. Continued use after changes indicates
						acceptance of the new policy.
					</p>
				</article>

				<article>
					<h2 className="text-xl font-semibold mb-2">8. Contact us</h2>
					<p className="text-gray-700">
						If you have questions or requests about your personal data, please contact
						us at <a href="mailto:privacy@spend.app" className="text-blue-600 underline">privacy@spend.app</a>.
					</p>
				</article>

				<footer className="mt-6 text-sm text-gray-600">
					This Privacy Policy describes how Spend (the "App") handles your personal
					information. It does not create any contractual rights beyond those in
					our Terms of Service.
				</footer>
			</section>
		</main>
	);
};

export default PrivacyPolicy;

