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
  multi?: boolean;
  options: { label: string; value: number; detail?: string }[];
}

const questions: Question[] = [
  {
    id: 'branche',
    title: 'In welcher Branche sind Sie tätig?',
    subtitle: 'Wählen Sie Ihren Schwerpunkt.',
    options: [
      { label: 'Bauunternehmen', value: 1, detail: 'Hoch- und Tiefbau, Generalunternehmer' },
      { label: 'Handwerksbetrieb', value: 2, detail: 'SHK, Elektro, Maler, Schreiner, etc.' },
      { label: 'Immobilien', value: 3, detail: 'Makler, Hausverwaltung, Projektentwickler' },
    ],
  },
  {
    id: 'mitarbeiter',
    title: 'Wie viele Mitarbeiter hat Ihr Unternehmen?',
    subtitle: 'Inkl. Büro und Baustelle/Außendienst.',
    options: [
      { label: '1–5', value: 5, detail: 'Kleinstbetrieb' },
      { label: '6–20', value: 15, detail: 'Kleiner Betrieb' },
      { label: '21–50', value: 35, detail: 'Mittelständisch' },
      { label: '50+', value: 75, detail: 'Größeres Unternehmen' },
    ],
  },
  {
    id: 'stunden',
    title: 'Wie viele Stunden pro Woche gehen für Büroarbeit drauf?',
    subtitle: 'Angebote, Rechnungen, E-Mails, Dokumentation, Nachfassen.',
    options: [
      { label: 'Unter 5 Std.', value: 3 },
      { label: '5–10 Std.', value: 8 },
      { label: '10–20 Std.', value: 15 },
      { label: 'Über 20 Std.', value: 25 },
    ],
  },
  {
    id: 'prozesse',
    title: 'Welche Aufgaben kosten am meisten Zeit?',
    subtitle: 'Wählen Sie alle zutreffenden.',
    multi: true,
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
      { label: 'Keine', value: 0, detail: 'Alles manuell / nur Papier' },
      { label: '1–2 Tools', value: 1 },
      { label: '3–5 Tools', value: 4 },
      { label: '6–10 Tools', value: 8 },
      { label: 'Mehr als 10', value: 12 },
    ],
  },
];

const processLabels: Record<number, string> = {
  1: 'Angebotserstellung und Kalkulation',
  2: 'Rechnungsstellung und Mahnwesen',
  3: 'Kommunikation und Abstimmung',
  4: 'Dokumentation und Berichtswesen',
};

function calculateResults(answers: Record<string, number>, multiAnswers: Record<string, number[]>) {
  const stunden = answers.stunden || 8;
  const tools = answers.tools ?? 4;
  const selectedProcesses = multiAnswers.prozesse || [];

  let automationRate = 0.40;
  if (tools > 5) automationRate += 0.15;
  if (stunden > 10) automationRate += 0.10;
  if (selectedProcesses.length > 1) automationRate += (selectedProcesses.length - 1) * 0.05;
  if (tools === 0) automationRate += 0.10;
  automationRate = Math.min(automationRate, 0.75);

  const weeklyHoursSaved = Math.round(stunden * automationRate);
  const yearlyHoursSaved = weeklyHoursSaved * 48;
  const costPerHour = 45;
  const yearlySavings = yearlyHoursSaved * costPerHour;
  const monthlyValue = Math.round(yearlySavings / 12);

  return { weeklyHoursSaved, yearlyHoursSaved, yearlySavings, monthlyValue, automationRate: Math.round(automationRate * 100) };
}

export default function PotenzialrechnerPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [multiAnswers, setMultiAnswers] = useState<Record<string, number[]>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = questions[step];
  const isMulti = currentQ?.multi;

  const handleSingleAnswer = (questionId: string, value: number) => {
    setAnswers({ ...answers, [questionId]: value });
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleMultiToggle = (questionId: string, value: number) => {
    const current = multiAnswers[questionId] || [];
    const updated = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    setMultiAnswers({ ...multiAnswers, [questionId]: updated });
  };

  const handleMultiConfirm = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const results = calculateResults(answers, multiAnswers);
  const selectedProcesses = multiAnswers.prozesse || [];
  const progress = showResults ? 100 : ((step + (answers[questions[step]?.id] !== undefined || (multiAnswers[questions[step]?.id]?.length ?? 0) > 0 ? 1 : 0)) / questions.length) * 100;

  return (
    <main style={{ background: NAVY, minHeight: '100vh' }}>
      <Nav />

      <div style={{ maxWidth: 720, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 8, letterSpacing: '-0.02em' }}>
          KI-Potenzialrechner
        </h1>
        <p style={{ color: '#888', fontSize: 16, textAlign: 'center', marginBottom: 40, lineHeight: 1.7 }}>
          In 2 Minuten erfahren Sie, wie viel Zeit und Geld KI in Ihrem Betrieb sparen kann.
        </p>

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
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              {currentQ.title}
            </h2>
            <p style={{ color: '#888', fontSize: 16, marginBottom: 32 }}>
              {currentQ.subtitle}
            </p>

            <div role={isMulti ? 'group' : 'radiogroup'} aria-label={currentQ.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {currentQ.options.map((opt, i) => {
                const isSelected = isMulti
                  ? (multiAnswers[currentQ.id] || []).includes(opt.value)
                  : answers[currentQ.id] === opt.value;
                return (
                  <button
                    key={i}
                    role={isMulti ? 'checkbox' : 'radio'}
                    aria-checked={isSelected}
                    aria-label={opt.label}
                    onClick={() => isMulti ? handleMultiToggle(currentQ.id, opt.value) : handleSingleAnswer(currentQ.id, opt.value)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '16px 20px',
                      background: isSelected ? 'rgba(255,107,107,0.15)' : 'rgba(255,255,255,0.05)',
                      border: isSelected ? `2px solid ${CORAL}` : '2px solid rgba(255,255,255,0.1)',
                      borderRadius: 12,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isMulti && (
                      <span style={{
                        width: 22, height: 22, borderRadius: 4,
                        border: isSelected ? `2px solid ${CORAL}` : '2px solid rgba(255,255,255,0.3)',
                        background: isSelected ? CORAL : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, fontSize: 14, color: '#fff',
                      }}>
                        {isSelected ? '✓' : ''}
                      </span>
                    )}
                    <div>
                      <span style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>{opt.label}</span>
                      {opt.detail && (
                        <span style={{ color: '#888', fontSize: 13, marginTop: 4, display: 'block' }}>{opt.detail}</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {isMulti && (
              <button
                onClick={handleMultiConfirm}
                disabled={(multiAnswers[currentQ.id] || []).length === 0}
                style={{
                  marginTop: 24,
                  width: '100%',
                  padding: '14px 24px',
                  background: (multiAnswers[currentQ.id] || []).length > 0 ? CORAL : 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: (multiAnswers[currentQ.id] || []).length > 0 ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease',
                  opacity: (multiAnswers[currentQ.id] || []).length > 0 ? 1 : 0.5,
                }}
              >
                Weiter
              </button>
            )}

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                style={{
                  marginTop: 16,
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  fontSize: 14,
                  padding: '8px 0',
                }}
              >
                ← Zurück
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
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                Ihre Ergebnisse
              </h2>
              <p style={{ color: '#888', fontSize: 16 }}>
                Basierend auf Ihren Angaben schätzen wir folgendes Einsparpotenzial:
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
                  {results.yearlySavings.toLocaleString('de-DE')} €
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
                Mit gezielter KI-Automatisierung könnten Sie ca.{' '}
                <strong style={{ color: CORAL }}>{results.monthlyValue.toLocaleString('de-DE')} € pro Monat</strong>{' '}
                an Personalkosten und Zeitaufwand einsparen.
                {selectedProcesses.length > 0 && (
                  <>{' '}Besonders bei{' '}
                    {selectedProcesses.map((p, i) => {
                      const label = processLabels[p] || '';
                      if (i === 0) return label;
                      if (i === selectedProcesses.length - 1) return ` und ${label}`;
                      return `, ${label}`;
                    }).join('')}
                    {' '}sehen wir das größte Potenzial.</>
                )}
              </p>
              <p style={{ color: '#999', fontSize: 13, marginTop: 12, marginBottom: 0 }}>
                Berechnung: {results.automationRate}% Automationsrate × {answers.stunden || 8} Std./Woche × 48 Wochen × 45€/Std.
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
                wo und wie Sie diese Einsparungen realisieren können.
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
                Jetzt KI-Quickcheck buchen – €490
              </a>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 12 }}>
                Auf Rechnung · Ergebnis in 48 Stunden
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <button
                onClick={() => { setShowResults(false); setStep(0); setAnswers({}); setMultiAnswers({}); }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  fontSize: 14,
                  padding: '8px 0',
                }}
              >
                ← Nochmal berechnen
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
