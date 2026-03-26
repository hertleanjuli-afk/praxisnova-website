'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/config/site';

const CORAL = '#FF6B6B';
const NAVY = '#0F1629';

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: { label: string; value: number; detail?: string }[];
}

const questions: Question[] = [
  {
    id: 'branche',
    title: 'In welcher Branche sind Sie t\u00E4tig?',
    subtitle: 'W\u00E4hlen Sie Ihren Schwerpunkt.',
    options: [
      { label: 'Bauunternehmen', value: 1, detail: 'Hoch- und Tiefbau, Generalunternehmer' },
      { label: 'Handwerksbetrieb', value: 2, detail: 'SHK, Elektro, Maler, Schreiner, etc.' },
      { label: 'Immobilien', value: 3, detail: 'Makler, Hausverwaltung, Projektentwickler' },
    ],
  },
  {
    id: 'mitarbeiter',
    title: 'Wie viele Mitarbeiter hat Ihr Unternehmen?',
    subtitle: 'Inkl. B\u00FCro und Baustelle/Au\u00DFendienst.',
    options: [
      { label: '1\u20135', value: 5, detail: 'Kleinstbetrieb' },
      { label: '6\u201320', value: 15, detail: 'Kleiner Betrieb' },
      { label: '21\u201350', value: 35, detail: 'Mittelst\u00E4ndisch' },
      { label: '50+', value: 75, detail: 'Gr\u00F6\u00DFeres Unternehmen' },
    ],
  },
  {
    id: 'stunden',
    title: 'Wie viele Stunden pro Woche gehen f\u00FCr B\u00FCroarbeit drauf?',
    subtitle: 'Angebote, Rechnungen, E-Mails, Dokumentation, Nachfassen.',
    options: [
      { label: 'Unter 5 Std.', value: 3 },
      { label: '5\u201310 Std.', value: 8 },
      { label: '10\u201320 Std.', value: 15 },
      { label: '\u00DCber 20 Std.', value: 25 },
    ],
  },
  {
    id: 'prozesse',
    title: 'Welche Aufgaben kosten am meisten Zeit?',
    subtitle: 'W\u00E4hlen Sie den gr\u00F6\u00DFten Zeitfresser.',
    options: [
      { label: 'Angebote & Kalkulation', value: 1 },
      { label: 'Rechnungen & Mahnungen', value: 2 },
      { label: 'Kommunikation & Abstimmung', value: 3 },
      { label: 'Dokumentation & Berichte', value: 4 },
    ],
  },
  {
    id: 'tools',
    title: 'Wie viele Software-Tools nutzen Sie aktuell?',
    subtitle: 'E-Mail, Buchhaltung, Projektmanagement, CRM, etc.',
    options: [
      { label: '1\u20132 Tools', value: 1 },
      { label: '3\u20135 Tools', value: 4 },
      { label: '6\u201310 Tools', value: 8 },
      { label: 'Mehr als 10', value: 12 },
    ],
  },
];

function calculateResults(answers: Record<string, number>) {
  const stunden = answers.stunden || 8;
  const mitarbeiter = answers.mitarbeiter || 15;
  const tools = answers.tools || 4;

  const automationRate = 0.4 + (tools > 5 ? 0.15 : 0) + (stunden > 10 ? 0.1 : 0);
  const weeklyHoursSaved = Math.round(stunden * automationRate);
  const yearlyHoursSaved = weeklyHoursSaved * 48;
  const costPerHour = 45;
  const yearlySavings = yearlyHoursSaved * costPerHour;
  const monthlyValue = Math.round(yearlySavings / 12);

  return { weeklyHoursSaved, yearlyHoursSaved, yearlySavings, monthlyValue };
}

export default function PotenzialrechnerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const results = calculateResults(answers);
  const progress = showResults ? 100 : ((step + (answers[questions[step]?.id] !== undefined ? 1 : 0)) / questions.length) * 100;

  return (
    <main style={{ background: NAVY, minHeight: '100vh' }}>
      <Nav />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>
        {/* Progress bar */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ color: '#888', fontSize: 14 }}>
              {showResults ? 'Ergebnis' : `Frage ${step + 1} von ${questions.length}`}
            </span>
            <span style={{ color: '#888', fontSize: 14 }}>{Math.round(progress)}%</span>
          </div>
          <div style={{ height: 4, background: '#1a1a3e', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: CORAL,
              borderRadius: 2,
              transition: 'width 0.5s ease',
            }} />
          </div>
        </div>

        {!showResults ? (
          <div key={step}>
            <h1 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              {questions[step].title}
            </h1>
            <p style={{ color: '#888', fontSize: 16, marginBottom: 32 }}>
              {questions[step].subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {questions[step].options.map((opt, i) => {
                const isSelected = answers[questions[step].id] === opt.value;
                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(questions[step].id, opt.value)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '16px 20px',
                      background: isSelected ? 'rgba(255,107,107,0.15)' : 'rgba(255,255,255,0.05)',
                      border: isSelected ? `2px solid ${CORAL}` : '2px solid rgba(255,255,255,0.1)',
                      borderRadius: 12,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>{opt.label}</span>
                    {opt.detail && (
                      <span style={{ color: '#888', fontSize: 13, marginTop: 4 }}>{opt.detail}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  marginTop: 24,
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  fontSize: 14,
                  padding: '8px 0',
                }}
              >
                \u2190 Zur\u00FCck
              </button>
            )}
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(255,107,107,0.15)',
                color: CORAL,
                fontSize: 13,
                fontWeight: 700,
                padding: '6px 16px',
                borderRadius: 20,
                textTransform: 'uppercase',
                letterSpacing: 1,
                marginBottom: 16,
              }}>
                Ihr KI-Potenzial
              </div>
              <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                Ihre Ergebnisse
              </h1>
              <p style={{ color: '#888', fontSize: 16 }}>
                Basierend auf Ihren Angaben sch\u00E4tzen wir folgendes Einsparpotenzial:
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
              marginBottom: 40,
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 16,
                padding: 24,
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: CORAL }}>{results.weeklyHoursSaved}</div>
                <div style={{ color: '#888', fontSize: 14, marginTop: 4 }}>Stunden/Woche gespart</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 16,
                padding: 24,
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: CORAL }}>{results.yearlyHoursSaved}</div>
                <div style={{ color: '#888', fontSize: 14, marginTop: 4 }}>Stunden/Jahr gespart</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 16,
                padding: 24,
                textAlign: 'center',
                border: `2px solid ${CORAL}`,
              }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>
                  {results.yearlySavings.toLocaleString('de-DE')} \u20AC
                </div>
                <div style={{ color: '#ccc', fontSize: 14, marginTop: 4, fontWeight: 600 }}>
                  Einsparpotenzial/Jahr
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 24,
              marginBottom: 32,
              border: '1px solid rgba(255,255,255,0.1)',
            }}>
              <p style={{ color: '#ccc', fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: '#fff' }}>Was bedeutet das konkret?</strong><br />
                Mit gezielter KI-Automatisierung k\u00F6nnten Sie ca. <strong style={{ color: CORAL }}>{results.monthlyValue.toLocaleString('de-DE')} \u20AC pro Monat</strong> an
                Personalkosten und Zeitaufwand einsparen. Besonders bei{' '}
                {answers.prozesse === 1 && 'Angebotserstellung und Kalkulation'}
                {answers.prozesse === 2 && 'Rechnungsstellung und Mahnwesen'}
                {answers.prozesse === 3 && 'Kommunikation und Abstimmung'}
                {answers.prozesse === 4 && 'Dokumentation und Berichtswesen'}
                {' '}sehen wir das gr\u00F6\u00DFte Potenzial.
              </p>
            </div>

            <div style={{
              background: `linear-gradient(135deg, ${CORAL}, #e55a5a)`,
              borderRadius: 16,
              padding: 32,
              textAlign: 'center',
            }}>
              <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
                Kostenloser KI-Quickcheck
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 15, marginBottom: 20, lineHeight: 1.6 }}>
                In 2 Stunden analysieren wir Ihre konkreten Prozesse und zeigen Ihnen genau,
                wo und wie Sie diese Einsparungen realisieren k\u00F6nnen.
              </p>
              <a
                href={SITE_CONFIG.calendly}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: CORAL,
                  fontWeight: 700,
                  padding: '14px 32px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontSize: 16,
                }}
              >
                Jetzt KI-Quickcheck buchen \u2014 \u20AC490
              </a>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 12 }}>
                Auf Rechnung \u00B7 Ergebnis in 48 Stunden
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <button
                onClick={() => { setShowResults(false); setStep(0); setAnswers({}); }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  fontSize: 14,
                  padding: '8px 0',
                }}
              >
                \u2190 Nochmal berechnen
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
