import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// Updated News Data based on your inputs
const NEWS = [
  {
    title: 'Featured in Dabang Bhopal',
    source: 'Dabang Bhopal (दबंग भोपाल)',
    date: '2024',
    desc: 'Recognized for innovation in AI and Technology, highlighting the journey of IND Services and local impact.',
    image: '/media/news1.jpg', // Make sure to put your Dabang Bhopal image here
    link: '#' // Agar koi online link ho to yahan dalein, nahi to '#' rahne dein
  },
  {
    title: 'Young AI Talent Feature',
    source: 'NoFicker News',
    date: 'Dec 2025',
    desc: 'Exclusive coverage on "18-year-old AI Developer" — discussing future tech, AI accomplishments, and the vision behind IND Services.',
    image: '/media/news2.jpg', // NoFicker wale article ka screenshot yahan lagayein
    link: 'https://www.noficker.in/2025/12/18-ai.html'
  }
]

export default function MediaCoverage() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="media"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{ fontSize: '2.2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}
        >
          📰 Press & Media
        </motion.h2>
        <p className="text-gray-400 mb-10" style={{ color: 'var(--muted)', marginBottom: '2rem' }}>
          Features and coverage highlighting my journey in Tech & Entrepreneurship.
        </p>

        <div className="media-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {NEWS.map((item, idx) => (
            <motion.div
              key={idx}
              className="news-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden', background: '#222', position: 'relative' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12,
                    opacity: 0.8
                  }}
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/400x200?text=Press+Feature"; // Fallback
                  }}
                />
                <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.7)', padding: '4px 8px', borderRadius: 6, fontSize: 12, color: '#fff' }}>
                  {item.source}
                </div>
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 12, lineHeight: 1.6 }}>{item.desc}</p>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Read Article
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}