import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function UeberUnsPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />
      <section style={{ padding: '72px 32px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#111', border: '1px solid #1E1E1E', borderRadius: 20, padding: '6px 14px', fontSize: 12, color: '#555', marginBottom: 24 }}>
            &Uuml;BER UNS
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            Zwei Frauen.<br />Eine Mission.
          </h1>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 48px' }}>
            Wir helfen kleinen und mittelstaendischen Unternehmen dabei, KI sinnvoll einzusetzen und repetitive Prozesse zu automatisieren.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 32px 80px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }} className="two-col">

          <div style={{ background: '#111', border: '1px solid #1E1E1E', borderRadius: 16, padding: 32 }}>
            <div style={{ width: 64, height: 64, borderRadius: 32, background: '#1a1a1a', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 24 }}>A</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Anjuli Hertle</h2>
            <p style={{ fontSize: 13, color: '#E8472A', marginBottom: 16 }}>KI-Strategie &amp; Workshops</p>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
              Anjuli bringt jahrelange Erfahrung in der digitalen Transformation mit. Sie entwickelt massgeschneiderte KI-Strategien und leitet praxisorientierte Workshops.
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              style={{ fontSize: 13, color: '#555', textDecoration: 'none' }}>
              LinkedIn &rarr;
            </a>
          </div>

          <div style={{ background: '#111', border: '1px solid #1E1E1E', borderRadius: 16, padding: 32 }}>
            <div style={{ width: 64, height: 64, borderRadius: 32, background: '#1a1a1a', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 24 }}>S</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>Samantha Meyer</h2>
            <p style={{ fontSize: 13, color: '#E8472A', marginBottom: 16 }}>Prozessautomatisierung &amp; Technik</p>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.7, marginBottom: 20 }}>
              Samantha spezialisiert sich auf technische Umsetzung und Prozessoptimierung. Sie implementiert Automatisierungsloesungen die sofort Wirkung zeigen.
            </p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
              style={{ fontSize: 13, color: '#555', textDecoration: 'none' }}>
              LinkedIn &rarr;
            </a>
          </div>

        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
