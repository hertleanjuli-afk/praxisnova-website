import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function DatenschutzPage() {
  return (
    <main style={{ background: '#0A0A0A', color: '#fff', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <Nav />
      <section style={{ padding: '64px 32px 80px', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32, letterSpacing: '-0.3px' }}>Datenschutzerkl&#228;rung</h1>

        <div style={{ fontSize: 14, color: '#888', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 0 }}>1. Datenschutz auf einen Blick</h2>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>Allgemeine Hinweise</h3>
          <p style={{ margin: '0 0 12px' }}>
            Die folgenden Hinweise geben einen einfachen &#220;berblick dar&#252;ber, was mit euren personenbezogenen Daten passiert, wenn ihr diese Website besucht. Personenbezogene Daten sind alle Daten, mit denen ihr pers&#246;nlich identifiziert werden k&#246;nnt.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>Datenerfassung auf dieser Website</h3>
          <p style={{ margin: '0 0 12px' }}>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&#246;nnt ihr dem Impressum dieser Website entnehmen.
          </p>
          <p style={{ margin: '0 0 12px' }}>
            Eure Daten werden zum einen dadurch erhoben, dass ihr uns diese mitteilt. Hierbei kann es sich z.B. um Daten handeln, die ihr in ein Kontaktformular eingeben.
          </p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>Datenschutz</h3>
          <p style={{ margin: '0 0 12px' }}>
            Die Betreiber dieser Seiten nehmen den Schutz eurer pers&#246;nlichen Daten sehr ernst. Wir behandeln eure personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl&#228;rung.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>Verantwortliche Stelle</h3>
          <p style={{ margin: '0 0 4px' }}>PraxisNova AI</p>
          <p style={{ margin: '0 0 4px' }}>[Adresse]</p>
          <p style={{ margin: '0 0 12px' }}>E-Mail: <a href="mailto:info@praxisnovaai.com" style={{ color: '#E8472A', textDecoration: 'none' }}>info@praxisnovaai.com</a></p>

          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>Speicherdauer</h3>
          <p style={{ margin: '0 0 12px' }}>
            Soweit innerhalb dieser Datenschutzerkl&#228;rung keine speziellere Speicherdauer genannt wurde, verbleiben eure personenbezogenen Daten bei uns, bis der Zweck f&#252;r die Datenverarbeitung entf&#228;llt. Wenn ihr ein berechtigtes L&#246;schersuchen geltend macht oder eine Einwilligung zur Datenverarbeitung widerruft, werden eure Daten gel&#246;scht, sofern wir keine anderen rechtlich zul&#228;ssigen Gr&#252;nde f&#252;r die Speicherung eurer personenbezogenen Daten haben.
          </p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>3. Datenerfassung auf dieser Website</h2>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>Kontaktformular und Calendly</h3>
          <p style={{ margin: '0 0 12px' }}>
            Wenn ihr uns per Kontaktformular oder &#252;ber Calendly (Terminbuchung) Anfragen zukommen lasst, werden eure Angaben aus dem Anfrageformular inklusive der von euch dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f&#252;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne eure Einwilligung weiter.
          </p>
          <p style={{ margin: '0 0 12px' }}>
            Calendly wird von Calendly LLC, 271 17th St NW, Atlanta, Georgia 30363, USA betrieben. Beim Buchen eines Termins &#252;ber Calendly werden Daten (Name, E-Mail, gew&#228;hlter Termin) an Calendly &#252;bertragen. Mehr Informationen findet ihr in der <a href="https://calendly.com/privacy" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>Datenschutzerkl&#228;rung von Calendly</a>.
          </p>

          <h3 style={{ fontSize: 14, fontWeight: 600, color: '#bbb', marginBottom: 6, marginTop: 16 }}>HubSpot</h3>
          <p style={{ margin: '0 0 12px' }}>
            Diese Website nutzt HubSpot f&#252;r das Customer-Relationship-Management. Anbieter ist die HubSpot, Inc., 25 First Street, 2nd Floor Cambridge, MA 02141 USA. Wenn ihr ein Formular auf dieser Website ausf&#252;llt, werden eure Daten auf den Servern von HubSpot gespeichert. HubSpot ist unter dem EU-US Data Privacy Framework zertifiziert. Mehr Informationen findet ihr in der <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>Datenschutzerkl&#228;rung von HubSpot</a>.
          </p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>4. Eure Rechte</h2>
          <p style={{ margin: '0 0 12px' }}>
            Ihr habt jederzeit das Recht auf unentgeltliche Auskunft &#252;ber eure gespeicherten personenbezogenen Daten, deren Herkunft und Empf&#228;nger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder L&#246;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k&#246;nnt ihr euch jederzeit an uns wenden.
          </p>
          <p style={{ margin: '0 0 12px' }}>
            Des Weiteren steht euch ein Beschwerderecht bei der zust&#228;ndigen Aufsichtsbeh&#246;rde zu.
          </p>

          <h2 style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 8, marginTop: 28 }}>5. Hosting</h2>
          <p style={{ margin: 0 }}>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, USA gehostet. Details entnehmt ihr der <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" style={{ color: '#E8472A', textDecoration: 'none' }}>Datenschutzerkl&#228;rung von Vercel</a>. Vercel ist unter dem EU-US Data Privacy Framework zertifiziert.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
