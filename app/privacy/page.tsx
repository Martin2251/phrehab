import React from 'react';

const PrivacyPolicy = () => {
  const sectionStyle = { marginBottom: '30px' };
  const headerStyle = { borderBottom: '2px solid #333', marginBottom: '20px', paddingBottom: '10px' };
  const listStyle = { lineHeight: '1.8' };

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif', color: '#222' }}>
      <header style={headerStyle}>
        <h1>Privacy Policy & GDPR Statement</h1>
        <p><strong>Effective Date:</strong> April 2026</p>
      </header>

      <section style={sectionStyle}>
        <h2>The Data Controller</h2>
        <p>
          The Data controller is <strong>Mr Prince John Adesuyi Enitan Haastrup</strong> (Physiotherapist), 
          trading as <strong>PH Sports Rehab</strong>. 
          For any data-related inquiries, please contact: <a href="mailto:prince@phsports.rehab">prince@phsports.rehab</a>.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Purpose of Processing Information</h2>
        <p>
          When you register as a patient, we collect personal data including your name, address, date of birth, 
          contact details, and relevant medical information. This allows us to:
        </p>
        <ul style={listStyle}>
          <li>Assess and manage your condition effectively.</li>
          <li>Maintain secure and transparent records in compliance with current legislation.</li>
          <li>Support and manage our clinical staff.</li>
          <li>Promote our services (where appropriate).</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Lawful Basis for Processing</h2>
        <p>
          Our legal basis for holding your data is <strong>Legitimate Interests</strong>. As members of the HCPC and CSP, 
          we are required to retain information to provide the best possible assessment and management of your condition. 
          Health-related data is classified as "special category data," which we process to fulfill our professional 
          duties as Physiotherapists.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>Data Storage and Retention</h2>
        <p>
          Your information is stored securely via password-protected computers, encrypted cloud-based software 
          (WriteUp), and secure internal paper records.
        </p>
        <ul style={listStyle}>
          <li><strong>Patient Files:</strong> Retained for a minimum of 8 years.</li>
          <li><strong>Financial Records:</strong> Retained for a minimum of 7 years.</li>
          <li><strong>Third Parties:</strong> We do not sell your data. We only share information with NHS/private referrers, insurers, or solicitors with your explicit permission.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2>Your Rights</h2>
        <p>Under GDPR, you have the following rights regarding your personal information:</p>
        <ul style={listStyle}>
          <li><strong>The right to be informed:</strong> Understanding how your data is used.</li>
          <li><strong>The right of access:</strong> Requesting to see the records held about you.</li>
          <li><strong>The right to rectification:</strong> Correcting inaccurate or incomplete data.</li>
          <li><strong>The right to erasure:</strong> Requesting data deletion (subject to legal retention periods).</li>
          <li><strong>The right to object:</strong> Limiting how specific parts of your data are used.</li>
        </ul>
        <p>
          If you are dissatisfied with how we handle your data, you have the right to lodge a complaint with 
          the Information Commissioner’s Office (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noreferrer">www.ico.org.uk</a>.
        </p>
      </section>

      <footer style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '0.9em', color: '#666' }}>
        <p>
          <strong>Please note:</strong> If you do not agree to our record-keeping policies, we may be unable 
          to provide treatment. We reserve the right to move records between secure IT systems as long as 
          your privacy remains protected.
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;