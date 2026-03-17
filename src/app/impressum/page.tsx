import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ImpressumPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />
      <section style={{ padding: '64px 32px 80px', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, letterSpacing: '-0.3px' }}>Impressum</h1>

        <div style={{ fontSize: 14, color: '#888', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Angaben gem&#228;&#223; &#167; 5 TMG</h2>
          <p style={{ margin: '0 0 4px' }}>PraxisNova AI</p>
          <p style={{ margin: '0 0 4px' }}>[Stra&#223;e und Hausnummer]</p>
          <p style={{ margin: '0 0 4px' }}>[PLZ Ort]</p>
          <p style={{ margin: '0 0 4px' }}>Deutschland</p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Vertreten durch</h2>
          <p style={{ margin: '0 0 4px' }}>Anjuli Hertle</p>
          <p style={{ margin: '0 0 4px' }}>Samantha Meyer</p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Kontakt</h2>
          <p style={{ margin: '0 0 4px' }}>E-Mail: <a href="mailto:info@praxisnovaai.com" style={{ color: '#E8472A', textDecoration: 'none' }}>info@praxisnovaai.com</a></p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Umsatzsteuer-ID</h2>
          <p style={{ margin: '0 0 4px' }}>Umsatzsteuer-Identifikationsnummer gem&#228;&#223; &#167; 27a Umsatzsteuergesetz:</p>
          <p style={{ margin: '0 0 4px' }}>[USt-ID wird nachgetragen]</p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Verantwortlich f&#252;r den Inhalt nach &#167; 55 Abs. 2 RStV</h2>
          <p style={{ margin: '0 0 4px' }}>Anjuli Hertle</p>
          <p style={{ margin: '0 0 4px' }}>[Adresse wie oben]</p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Haftungsausschluss</h2>
          <p style={{ margin: '0 0 12px' }}>
            Die Inhalte unserer Seiten wurden mit gr&#246;&#223;ter Sorgfalt erstellt. F&#252;r die Richtigkeit, Vollst&#228;ndigkeit und Aktualit&#228;t der Inhalte k&#246;nnen wir jedoch keine Gew&#228;hr &#252;bernehmen.
          </p>
          <p style={{ margin: '0 0 12px' }}>
            Als Diensteanbieter sind wir gem&#228;&#223; &#167; 7 Abs. 1 TMG f&#252;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &#167;&#167; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &#252;bermittelte oder gespeicherte fremde Informationen zu &#252;berwachen oder nach Umst&#228;nden zu forschen, die auf eine rechtswidrige T&#228;tigkeit hinweisen.
          </p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>Streitschlichtung</h2>
          <p style={{ margin: 0 }}>
            Die Europ&#228;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>https://ec.europa.eu/consumers/odr</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <p style={{ fontSize: 12, color: '#2a2a2a', marginTop: 32 }}>
          Bitte erg&#228;nzt die mit [Klammern] markierten Felder mit euren tats&#228;chlichen Angaben.
        </p>
      </section>
      <Footer />
    </main>
  );
}
