import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🤖 IND Services AI Chatbot',
    desc: 'AI-powered chatbot built using Generative AI APIs for answering user queries and demonstrating practical AI usage in real-world scenarios.',
    ss: '/projects/chatbot.png', // Placeholder path
    tech: ['JavaScript', 'AI APIs', 'Node.js', 'GenAI'],
    live: 'https://indservices.site',
    code: 'https://github.com/indreshdangi/indresh2.0'
  },
  {
  title: '🌐 IND Services – Web Platform',
  desc: 'A professional web presence for a service-based company offering website development and digital solutions to local businesses.',
  ss: '/projects/indservices.png', // Placeholder path
  tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
  live: 'https://indreshdangi.github.io/indreshdangi/indservices',
  code: 'https://github.com/indreshdangi/indservices'
  },
  {
    title: '🚀 Youthguru Initiative',
    desc: 'Youth-focused initiative aimed at guidance, digital awareness, and early-age entrepreneurship support. (Offline/Managed Project)',
    ss: '/projects/youthguru.png', // Placeholder path
    tech: ['Entrepreneurship', 'Leadership', 'Management'],
    live: '#',
    code: '#'
  },
  {
  title: '🌾 Kishan Sarthi (Agritech)',
  desc: 'Agriculture-focused initiative working on farmer guidance, crop planning, and rural problem identification through technology.',
  ss: '/projects/kishan.png', // Placeholder path
  tech: ['Agritech', 'Field Analysis', 'Problem Solving'],
  live: '#',
  code: '#'
  },
  {
    title: '🏙️ Local Service Portals',
    desc: 'Developed local digital assistance centers and service portals to help rural communities access online government services.',
    ss: '/projects/local.png', // Placeholder path
    tech: ['Web Ops', 'Digital Literacy', 'Community Work'],
    live: '#',
    code: '#'
  }
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">
          A collection of my work — blending technology, business, and agriculture.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
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
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden', background: '#222' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12,
                    opacity: 0.8
                  }}
                  onError={(e) => {e.target.style.display='none'}} // Hide broken images if placeholders don't exist
                />
                {/* Fallback text if image fails */}
                <div style={{ padding: 20, textAlign: 'center', color: '#666', fontSize: 12 }}>
                  Project Preview
                </div>
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  {p.code !== '#' && (
                    <motion.a
                      href={p.code}
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
                      <Github size={14} /> Code
                    </motion.a>
                  )}
                  {p.live !== '#' && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                        color: '#fff',
                        padding: '6px 12px',
                        borderRadius: 8,
                        fontSize: 13,
                        textDecoration: 'none'
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}