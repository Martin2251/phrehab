"use client"
const Booking = () =>{
    return(
    <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  marginTop: '40px', 
  marginBottom: '40px' 
}}>
  <a 
    href="https://ph-sports-rehab.selectandbook.com" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      padding: '16px 40px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#1a1a1a', // Professional dark theme
      borderRadius: '6px',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: '2px solid #1a1a1a',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = '#1a1a1a';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#1a1a1a';
      e.currentTarget.style.color = '#fff';
    }}
  >
    Book Appointment Online Here
  </a>
</div>
    )

}

export default Booking