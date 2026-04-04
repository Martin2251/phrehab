import React from 'react';

const TermsOfService = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6' }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '30px', paddingBottom: '10px' }}>
        <h1 style={{ margin: 0 }}>Terms of Service</h1>
        <p style={{ color: '#666' }}>PH Sports Rehab | Effective from 12 March 2026</p>
      </header>

      <section>
        <h2>1. Background & Agreement</h2>
        <p>
          These Terms of Sale govern the physiotherapy services provided to Consumers by <strong>PH Sports Rehab</strong>. 
          By making a Booking, you agree to be bound by these terms. This contract includes all information provided 
          on our website, via telephone, or in person that you rely on when booking.
        </p>
        <p><em>Note: These terms apply to face-to-face services only. Website use is governed by separate terms.</em></p>
      </section>

      <section>
        <h2>2. Our Details</h2>
        <p>
          <strong>PH Sports Rehab</strong> is the trading name of <strong>Prince Haastrup</strong>. 
          We are registered with the Health and Care Professions Council (HCPC) and are members of the 
          Chartered Society of Physiotherapy (CSP).
        </p>
        <address style={{ fontStyle: 'normal', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
          Mem's Weightlifting Club,<br />
          Arch 22 & 25, 22 Bondway,<br />
          London SW8 1SQ
        </address>
      </section>

      <section>
        <h2>3. Bookings & Eligibility</h2>
        <ul>
          <li><strong>Age:</strong> You must be 18 years or older to book.</li>
          <li><strong>Confirmation:</strong> A legally binding contract is formed only once we issue a Booking Confirmation (via email or verbally).</li>
          <li><strong>Inclusions:</strong> Services include assessment, diagnosis, advice, treatment, and exercise prescription.</li>
        </ul>
      </section>

      <section>
        <h2>4. Payment & Fees</h2>
        <p>
          Prices are communicated before booking. Payment is due in advance or at the time of the appointment. 
          Failure to pay may result in the cancellation or suspension of future appointments.
        </p>
      </section>

      <section>
        <h2>5. Cancellations & No-Shows</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #ddd' }}>
              <th style={{ padding: '10px' }}>Notice Given</th>
              <th style={{ padding: '10px' }}>Policy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Over 48 Hours</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>No charge / Reschedule allowed</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Under 48 Hours / Missed</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>Full appointment fee charged</td>
            </tr>
          </tbody>
        </table>
        <p><small>Under the Consumer Contracts Regulations 2013, you have a 14-day right to cancel, though this is lost once services have been fully performed.</small></p>
      </section>

      <section>
        <h2>6. Health, Safety & Liability</h2>
        <p>
          By attending, you confirm you have disclosed all medical conditions and injuries. 
          While we provide services with professional care and skill, we do not guarantee specific outcomes. 
          Physiotherapy carries inherent risks, and you should seek advice from a GP if you have specific health concerns.
        </p>
      </section>

      <section>
        <h2>7. Complaints</h2>
        <p>
          If you have concerns, please contact us immediately:
        </p>
        <ul>
          <li><strong>Email:</strong> prince@phsports.rehab</li>
          <li><strong>ADR:</strong> Unresolved complaints may be referred to an Alternative Dispute Resolution provider.</li>
        </ul>
      </section>

      <footer style={{ marginTop: '40px', fontSize: '0.9em', color: '#888' }}>
        <p>These terms are governed by the laws of England and Wales.</p>
      </footer>
    </div>
  );
};

export default TermsOfService;