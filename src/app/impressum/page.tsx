import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum | PraxisNova AI',
  description: 'Impressum der PraxisNova AI – Angaben gemäß § 5 TMG, Kontaktinformationen und Haftungsausschluss.',
  alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />
      <section style={{ padding: '72px 32px 80px', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 36, letterSpacing: '-0.3px', color: '#fff' }}>Impressum</h1>

        <div style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Angaben gemäß § 5 TMG</h2>
          <p style={{ margin: '0 0 4px' }}>PraxisNova AI</p>
          <p style={{ margin: '0 0 4px' }}>[Straße und Hausnummer]</p>
          <p style={{ margin: '0 0 4px' }}>[PLZ Ort]</p>
          <p style={{ margin: '0 0 4px' }}>Deutschland</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Vertreten durch</h2>
          <p style={{ margin: '0 0 4px' }}>Anjuli Hertle (Gründerin)</p>
          <p style={{ margin: '0 0 4px' }}>Samantha Meyer (Gründerin)</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Kontakt</h2>
          <p style={{ margin: '0 0 4px' }}>E-Mail: <a href="mailto:info@praxisnovaai.com" style={{ color: '#E8472A', textDecoration: 'none' }}>info@praxisnovaai.com</a></p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Umsatzsteuer-ID</h2>
          <p style={{ margin: '0 0 4px' }}>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
          <p style={{ margin: '0 0 4px' }}>[USt-ID wird nachgetragen]</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p style={{ margin: '0 0 4px' }}>Anjuli Hertle</p>
          <p style={{ margin: '0 0 4px' }}>[Adresse wie oben]</p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Haftungsausschluss</h2>
          <p style={{ margin: '0 0 14px' }}>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>Streitschlichtung</h2>
          <p style={{ margin: 0 }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>https://ec.europa.eu/consumers/odr</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <p style={{ fontSize: 13, color: '#333', marginTop: 36 }}>
          Bitte ergänzen Sie die mit [Klammern] markierten Felder mit Ihren tatsächlichen Angaben.
        </p>
      </section>
      <Footer />
    </main>
  );
}
