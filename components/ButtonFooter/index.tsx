"use client"
import Link from 'next/link';
import React from 'react'

const ButtonFooter = () => {
  return (
<footer style={{ marginTop: '50px', textAlign: 'center' }}>
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: '20px' 
  }}>
    <Link href="/" style={{ textDecoration: 'none' }}>
      <span
        style={{
          display: 'inline-block',
          padding: '12px 40px',
          fontSize: '1rem',
          fontWeight: '600',
          color: '#fff',
          backgroundColor: '#222', // Deep charcoal for a professional look
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          border: '1px solid #222',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.color = '#222';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#222';
          e.currentTarget.style.color = '#fff';
        }}
      >
        Return to Home
      </span>
    </Link>
    
    <p style={{ fontSize: '0.8rem', color: '#999' }}>
      © {new Date().getFullYear()} PH Sports Rehab
    </p>
  </div>
</footer>
  )
}

export default ButtonFooter
