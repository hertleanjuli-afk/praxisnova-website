import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung | PraxisNova AI',
  description: 'Datenschutzerklärung der PraxisNova AI – Informationen zur Datenverarbeitung, Ihren Rechten und den eingesetzten Diensten.',
  alternates: { canonical: '/datenschutz' },
};

export default function DatenschutzPage() {
  return (
    <main style={{ background: '#080C1A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />
      <section style={{ padding: '72px 32px 80px', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 36, letterSpacing: '-0.3px', color: '#fff' }}>Datenschutzerklärung</h1>

        <div style={{ fontSize: 16, color: '#888', lineHeight: 1.75 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 0 }}>1. Datenschutz auf einen Blick</h2>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>Allgemeine Hinweise</h3>
          <p style={{ margin: '0 0 14px' }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>Datenerfassung auf dieser Website</h3>
          <p style={{ margin: '0 0 14px' }}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>Datenschutz</h3>
          <p style={{ margin: '0 0 14px' }}>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>Verantwortliche Stelle</h3>
          <p style={{ margin: '0 0 4px' }}>PraxisNova AI</p>
          <p style={{ margin: '0 0 4px' }}>Otto-Hahn-Str. 15, 72622 Nürtingen, Deutschland</p>
          <p style={{ margin: '0 0 14px' }}>E-Mail: <a href="mailto:info@praxisnovaai.com" style={{ color: '#E8472A', textDecoration: 'none' }}>info@praxisnovaai.com</a></p>

          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>Speicherdauer</h3>
          <p style={{ margin: '0 0 14px' }}>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
          </p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>3. Datenerfassung auf dieser Website</h2>
          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>Kontaktformular und Calendly</h3>
          <p style={{ margin: '0 0 14px' }}>
            Wenn Sie uns per Kontaktformular oder über Calendly (Terminbuchung) Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            Calendly wird von Calendly LLC, 271 17th St NW, Atlanta, Georgia 30363, USA betrieben. Beim Buchen eines Termins über Calendly werden Daten (Name, E-Mail, gewählter Termin) an Calendly übertragen. Mehr Informationen finden Sie in der <a href="https://calendly.com/privacy" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>Datenschutzerklärung von Calendly</a>.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 18 }}>HubSpot</h3>
          <p style={{ margin: '0 0 14px' }}>
            Diese Website nutzt HubSpot für das Customer-Relationship-Management. Anbieter ist die HubSpot, Inc., 25 First Street, 2nd Floor Cambridge, MA 02141 USA. Wenn Sie ein Formular auf dieser Website ausfüllen, werden Ihre Daten auf den Servern von HubSpot gespeichert. HubSpot ist unter dem EU-US Data Privacy Framework zertifiziert. Mehr Informationen finden Sie in der <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>Datenschutzerklärung von HubSpot</a>.
          </p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>4. Ihre Rechte</h2>
          <p style={{ margin: '0 0 14px' }}>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 10, marginTop: 32 }}>5. Hosting</h2>
          <p style={{ margin: 0 }}>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA gehostet. Details entnehmen Sie der <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>Datenschutzerklärung von Vercel</a>. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
