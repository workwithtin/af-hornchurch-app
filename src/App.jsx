import { useState } from 'react'

// ─── Brand tokens ────────────────────────────────────────────────────────────
const C = {
  bg:  '#27214f',
  c1:  '#312b62',
  c2:  '#3c3576',
  acc: '#4f4399',
  hi:  '#7b6fd4',
  txt: '#fdfdfd',
  mu:  '#9d94c8',
  bdr: 'rgba(255,255,255,0.09)',
  gr:  '#34d399',
  am:  '#fbbf24',
  rd:  '#f87171',
  nav: '#252050',
}

const FF = "'Outfit', system-ui, sans-serif"

// ─── Shared components ───────────────────────────────────────────────────────

function Badge({ type = 'pu', children, style }) {
  const map = {
    pu: { background: C.acc,                    color: C.txt },
    gn: { background: 'rgba(52,211,153,0.15)',  color: C.gr  },
    am: { background: 'rgba(251,191,36,0.15)',  color: C.am  },
    rd: { background: 'rgba(248,113,113,0.15)', color: C.rd  },
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 3,
      fontSize: 10, padding: '3px 9px', borderRadius: 20, fontWeight: 500,
      fontFamily: FF, ...map[type], ...style,
    }}>
      {children}
    </span>
  )
}

function Card({ children, style }) {
  return (
    <div style={{
      background: C.c1, borderRadius: 16, padding: 15,
      marginBottom: 11, border: `0.5px solid ${C.bdr}`, ...style,
    }}>
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: '0.5px', background: C.bdr, margin: '11px 0' }} />
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 10, color: C.mu, textTransform: 'uppercase', letterSpacing: '0.8px', margin: '14px 0 9px' }}>
      {children}
    </div>
  )
}

function FieldLabel({ children }) {
  return (
    <div style={{ fontSize: 10, color: C.mu, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 4 }}>
      {children}
    </div>
  )
}

function InfoNote({ children }) {
  return (
    <div style={{ fontSize: 10, color: C.hi, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
      <i className="ti ti-info-circle" style={{ fontSize: 12 }} aria-hidden="true" />
      {children}
    </div>
  )
}

function Avatar({ initials, size = 38, fontSize = 13, bg = C.acc, color = C.txt }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize, fontWeight: 600, color, flexShrink: 0, fontFamily: FF,
    }}>
      {initials}
    </div>
  )
}

function BtnPrimary({ children, onClick, style }) {
  return (
    <div onClick={onClick} style={{
      background: C.acc, color: C.txt, borderRadius: 12,
      padding: 13, textAlign: 'center', fontSize: 14, fontWeight: 600,
      cursor: 'pointer', fontFamily: FF, marginBottom: 8, ...style,
    }}>
      {children}
    </div>
  )
}

function BtnSecondary({ children, onClick, style }) {
  return (
    <div onClick={onClick} style={{
      background: C.c2, color: C.txt, border: `0.5px solid ${C.bdr}`,
      borderRadius: 12, padding: 12, textAlign: 'center', fontSize: 14,
      cursor: 'pointer', fontFamily: FF, marginBottom: 11, ...style,
    }}>
      {children}
    </div>
  )
}

function BackHeader({ onBack, title, subtitle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, marginBottom: subtitle ? 15 : 18 }}>
      <div onClick={onBack} style={{
        width: 32, height: 32, borderRadius: 10, background: C.c2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0,
      }}>
        <i className="ti ti-arrow-left" style={{ fontSize: 16, color: C.mu }} aria-hidden="true" />
      </div>
      <div>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>{title}</div>
        {subtitle && <div style={{ fontSize: 12, color: C.mu, marginTop: 1 }}>{subtitle}</div>}
      </div>
    </div>
  )
}

function Radio({ checked, onChange }) {
  return (
    <div onClick={onChange} style={{
      width: 16, height: 16, borderRadius: '50%',
      border: `1.5px solid ${checked ? C.acc : C.hi}`,
      background: checked ? C.acc : 'transparent',
      flexShrink: 0, cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {checked && <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.txt }} />}
    </div>
  )
}

function ResourceTile({ icon, label, sub }) {
  return (
    <div style={{
      background: C.c1, borderRadius: 14, padding: 13,
      display: 'flex', alignItems: 'center', gap: 11,
      marginBottom: 9, border: `0.5px solid ${C.bdr}`, cursor: 'pointer',
    }}>
      <div style={{
        width: 42, height: 42, background: C.acc, borderRadius: 11,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 19, color: C.txt, flexShrink: 0,
      }}>
        <i className={`ti ${icon}`} aria-hidden="true" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: C.txt }}>{label}</div>
        <div style={{ fontSize: 11, color: C.mu, marginTop: 1 }}>{sub}</div>
      </div>
      <i className="ti ti-chevron-right" style={{ color: C.mu }} aria-hidden="true" />
    </div>
  )
}

// ─── Screen: Login ───────────────────────────────────────────────────────────

function Login({ onClient, onCoach }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0 16px' }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%', background: C.acc,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 18, border: `2px solid ${C.hi}`,
      }}>
        <span style={{ fontSize: 26, fontWeight: 800, color: C.txt, fontFamily: FF, letterSpacing: -1 }}>AF</span>
      </div>
      <div style={{ fontSize: 13, color: C.mu, marginBottom: 3 }}>Welcome to</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: C.txt, marginBottom: 3 }}>AF Hornchurch</div>
      <div style={{ fontSize: 13, color: C.hi, fontWeight: 500, marginBottom: 28 }}>Longevity Programme</div>

      <div style={{ width: '100%' }}>
        <div style={{ fontSize: 11, color: C.mu, marginBottom: 6 }}>Email address</div>
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <i className="ti ti-mail" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.mu, fontSize: 16 }} aria-hidden="true" />
          <input type="email" placeholder="you@example.com" style={{ background: C.c2, border: `0.5px solid ${C.bdr}`, borderRadius: 11, padding: '11px 13px 11px 38px', color: C.txt, fontSize: 13, width: '100%', fontFamily: FF }} />
        </div>
        <div style={{ fontSize: 11, color: C.mu, marginBottom: 6 }}>Password</div>
        <div style={{ position: 'relative', marginBottom: 6 }}>
          <i className="ti ti-lock" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.mu, fontSize: 16 }} aria-hidden="true" />
          <input type="password" placeholder="Enter your password" style={{ background: C.c2, border: `0.5px solid ${C.bdr}`, borderRadius: 11, padding: '11px 13px 11px 38px', color: C.txt, fontSize: 13, width: '100%', fontFamily: FF }} />
        </div>
        <div style={{ textAlign: 'right', marginBottom: 18 }}>
          <span style={{ fontSize: 11, color: C.hi, cursor: 'pointer' }}>Forgot password?</span>
        </div>
        <BtnPrimary style={{ marginBottom: 0 }}>Log In</BtnPrimary>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '20px 0 14px', width: '100%' }}>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ fontSize: 10, color: C.mu, letterSpacing: '0.8px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Demo Mode</div>
        <div style={{ flex: 1, height: '0.5px', background: 'rgba(255,255,255,0.12)' }} />
      </div>
      <div style={{ fontSize: 11, color: C.mu, textAlign: 'center', marginBottom: 14, lineHeight: 1.5 }}>
        Skip login and preview the app as a client or coach
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%' }}>
        <div onClick={onClient} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: C.c1, border: `0.5px solid ${C.bdr}`, borderRadius: 14, padding: '14px 10px', cursor: 'pointer' }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, background: C.acc, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="ti ti-user" style={{ fontSize: 20, color: C.txt }} aria-hidden="true" />
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.txt }}>Client View</div>
          <div style={{ fontSize: 10, color: C.mu, textAlign: 'center' }}>Programme access</div>
        </div>
        <div onClick={onCoach} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, background: C.c1, border: `0.5px solid ${C.bdr}`, borderRadius: 14, padding: '14px 10px', cursor: 'pointer' }}>
          <div style={{ width: 40, height: 40, borderRadius: 11, background: C.c2, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `0.5px solid rgba(255,255,255,0.12)` }}>
            <i className="ti ti-clipboard-list" style={{ fontSize: 20, color: C.hi }} aria-hidden="true" />
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.txt }}>Coach View</div>
          <div style={{ fontSize: 10, color: C.mu, textAlign: 'center' }}>Sessions &amp; clients</div>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Home ────────────────────────────────────────────────────────────

function Home({ nav }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, marginBottom: 6 }}>
        <div>
          <div style={{ fontSize: 12, color: C.mu }}>Good morning,</div>
          <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>Sarah</div>
        </div>
        <Avatar initials="SC" size={42} fontSize={15} />
      </div>

      <div style={{ marginBottom: 15 }}>
        <Badge type="pu">
          <i className="ti ti-bolt" style={{ fontSize: 10 }} aria-hidden="true" /> Longevity · Day 34
        </Badge>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 11 }}>
        <div style={{ background: C.c1, borderRadius: 14, padding: 13, border: `0.5px solid ${C.bdr}` }}>
          <FieldLabel>Sessions</FieldLabel>
          <div style={{ fontSize: 22, fontWeight: 600, color: C.txt }}>1<span style={{ fontSize: 13, color: C.mu }}>/wk</span></div>
          <div style={{ fontSize: 10, color: C.gr, marginTop: 3 }}>Attended</div>
        </div>
        <div style={{ background: C.c1, borderRadius: 14, padding: 13, border: `0.5px solid ${C.bdr}` }}>
          <FieldLabel>Check-In</FieldLabel>
          <div style={{ fontSize: 17, fontWeight: 600, color: C.am }}>Due Fri</div>
          <div style={{ fontSize: 10, color: C.mu, marginTop: 3 }}>Week 5 of 12</div>
        </div>
      </div>

      <Card>
        <FieldLabel>Next Session</FieldLabel>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 7 }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: C.txt }}>Tue, 27 May</div>
            <div style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>10:00 AM · 45 min</div>
          </div>
          <Badge type="gn">Confirmed</Badge>
        </div>
        <Divider />
        <div style={{ fontSize: 11, color: C.mu }}>Longevity Programme Session</div>
      </Card>

      <SectionLabel>Quick Actions</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 12 }}>
        {[
          { id: 'book',    icon: 'ti-calendar-plus',    label: 'Book Session'  },
          { id: 'ci',      icon: 'ti-clipboard-check',  label: 'Check-In'      },
          { id: 'journal', icon: 'ti-notebook',          label: 'Food Journal'  },
          { id: 'comm',    icon: 'ti-users',             label: 'Community'     },
        ].map(({ id, icon, label }) => (
          <div key={id} onClick={() => nav(id)} style={{ background: C.c2, borderRadius: 14, padding: '15px 8px', textAlign: 'center', cursor: 'pointer' }}>
            <i className={`ti ${icon}`} style={{ fontSize: 24, color: C.hi }} aria-hidden="true" />
            <div style={{ fontSize: 11, color: C.txt, marginTop: 5 }}>{label}</div>
          </div>
        ))}
      </div>
    </>
  )
}

// ─── Screen: Weekly Check-In ─────────────────────────────────────────────────

function CheckIn() {
  return (
    <>
      <div style={{ marginTop: 6, marginBottom: 4 }}>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>Weekly Check-In</div>
        <div style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>Week 5 of 12 · Due Friday</div>
      </div>
      <InfoNote>Live GHL form — embedded via iframe</InfoNote>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/PuZlpNWt9Kn9GFNoTgiu"
        style={{ width: '100%', minHeight: 2200, border: 'none', display: 'block' }}
        id="inline-PuZlpNWt9Kn9GFNoTgiu"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Check In Form"
        data-height="2141"
        data-form-id="PuZlpNWt9Kn9GFNoTgiu"
        title="Check In Form"
      />
    </>
  )
}

// ─── Screen: Book a Session ──────────────────────────────────────────────────

function BookSession({ calDay, setCalDay }) {
  const availDays = [6, 8, 13, 15, 20, 22, 27, 29]
  return (
    <>
      <div style={{ marginTop: 6, marginBottom: 14 }}>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>Book a Session</div>
        <div style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>May 2026 · 1 session per week</div>
      </div>
      <InfoNote>Live GHL calendar embedded here</InfoNote>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3, marginBottom: 4 }}>
        {['M','T','W','T','F','S','S'].map((d, i) => (
          <div key={i} style={{ textAlign: 'center', fontSize: 9, color: C.mu }}>{d}</div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3, marginBottom: 16 }}>
        {Array.from({ length: 4 }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: 31 }, (_, i) => {
          const d = i + 1
          const avail = availDays.includes(d)
          const sel   = calDay === d
          const today = d === 21
          return (
            <div key={d} onClick={() => avail && setCalDay(d)} style={{
              aspectRatio: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, borderRadius: 7,
              background: sel ? C.acc : avail ? C.c2 : 'transparent',
              color:      sel || avail ? C.txt : C.mu,
              border:     today && !sel ? `0.5px solid ${C.hi}` : 'none',
              cursor:     avail ? 'pointer' : 'default',
            }}>
              {d}
            </div>
          )
        })}
      </div>

      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/sNBCujYsflqgq2k7oVth"
        style={{ width: '100%', minHeight: 700, border: 'none', display: 'block' }}
        id="sNBCujYsflqgq2k7oVth_1779317493046"
        title="Book a Session"
      />

      <SectionLabel>Upcoming Bookings</SectionLabel>
      <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: C.txt }}>Tue 27 May · 10:00 AM</div>
          <div style={{ fontSize: 11, color: C.mu, marginTop: 2 }}>45 min session</div>
        </div>
        <Badge type="gn">Confirmed</Badge>
      </Card>
    </>
  )
}

// ─── Screen: Food Journal (NEW) ──────────────────────────────────────────────

function FoodJournal() {
  return (
    <>
      <div style={{ marginTop: 6, marginBottom: 4 }}>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>Food Journal</div>
        <div style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>Your daily nutrition log</div>
      </div>
      <InfoNote>Live GHL form — embedded via iframe</InfoNote>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/5nMh7TsIFr7hi49cMRfB"
        style={{ width: '100%', minHeight: 1000, border: 'none', display: 'block' }}
        id="inline-5nMh7TsIFr7hi49cMRfB"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-activation-type="alwaysActivated"
        data-deactivation-type="neverDeactivate"
        data-form-name="Food Journal"
        data-form-id="5nMh7TsIFr7hi49cMRfB"
        title="Food Journal"
      />
    </>
  )
}

// ─── Screen: My Progress (moved to More sub-screen) ──────────────────────────

function Progress({ metricsOpen, setMetricsOpen, nav }) {
  return (
    <>
      <BackHeader onBack={() => nav('more')} title="My Progress" subtitle="Longevity Programme · Day 34" />

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <FieldLabel>Weight (kg)</FieldLabel>
          <span style={{ fontSize: 11, color: C.gr }}>▼ 2.4 kg since start</span>
        </div>
        <svg width="100%" height="88" viewBox="0 0 290 88" preserveAspectRatio="none">
          <polyline points="10,74 55,66 100,60 145,52 190,44 240,38 290,32" fill="none" stroke="#6b5ec4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="10,74 55,66 100,60 145,52 190,44 240,38 290,32 290,88 10,88" fill="#4f4399" fillOpacity="0.15" />
          <circle cx="290" cy="32" r="4" fill="#7b6fd4" />
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: C.mu, marginTop: 3 }}>
          <span>Start: 78.4 kg</span><span>Now: 76.0 kg</span>
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 11 }}>
        {[
          { label: 'Waist',    val: '88', unit: 'cm', diff: '▼ 3 cm'   },
          { label: 'Body Fat', val: '28', unit: '%',  diff: '▼ 1.2%'  },
          { label: 'Sessions', val: '18', unit: '',   diff: 'attended', neutral: true },
          { label: 'Muscle',   val: '42', unit: 'kg', diff: '▲ 0.8 kg' },
        ].map(({ label, val, unit, diff, neutral }) => (
          <div key={label} style={{ background: C.c1, borderRadius: 14, padding: 13, border: `0.5px solid ${C.bdr}` }}>
            <FieldLabel>{label}</FieldLabel>
            <div style={{ fontSize: 19, fontWeight: 600, color: C.txt }}>
              {val}<span style={{ fontSize: 11, color: C.mu }}>{unit}</span>
            </div>
            <div style={{ fontSize: 10, color: neutral ? C.mu : C.gr, marginTop: 2 }}>{diff}</div>
          </div>
        ))}
      </div>

      <BtnSecondary onClick={() => setMetricsOpen(!metricsOpen)}>
        {metricsOpen ? 'Close Form' : '+ Log New Metrics'}
      </BtnSecondary>

      {metricsOpen && (
        <Card>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.txt, marginBottom: 4 }}>Body Metrics Form</div>
          <InfoNote>Live GHL form embedded here</InfoNote>
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/Im74rg7KPxxrl9D8ATn1"
            style={{ width: '100%', minHeight: 1400, border: 'none', display: 'block' }}
            id="inline-Im74rg7KPxxrl9D8ATn1"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Body Metrics Form"
            data-height="1350"
            data-form-id="Im74rg7KPxxrl9D8ATn1"
            title="Body Metrics Form"
          />
        </Card>
      )}
    </>
  )
}

// ─── Screen: More (updated — Progress added as full-width row) ────────────────

function More({ nav, onSignOut }) {
  const tiles = [
    { id: 'res',     icon: 'ti-books',         label: 'Resources',    sub: 'PDFs & videos'       },
    { id: 'comm',    icon: 'ti-users',          label: 'Community',    sub: 'Connect with others'  },
    { id: 'contact', icon: 'ti-message-circle', label: 'Get in Touch', sub: 'WhatsApp or email'   },
    { id: 'prof',    icon: 'ti-user-circle',    label: 'My Profile',   sub: 'Programme details'   },
  ]
  return (
    <>
      <div style={{ marginTop: 6, marginBottom: 20 }}>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>More</div>
      </div>

      {/* 2x2 grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
        {tiles.map(({ id, icon, label, sub }) => (
          <div key={id} onClick={() => nav(id)} style={{
            background: C.c1, borderRadius: 16, padding: '22px 12px',
            textAlign: 'center', cursor: 'pointer', border: `0.5px solid ${C.bdr}`,
          }}>
            <i className={`ti ${icon}`} style={{ fontSize: 28, color: C.hi }} aria-hidden="true" />
            <div style={{ fontSize: 13, color: C.txt, marginTop: 9, fontWeight: 500 }}>{label}</div>
            <div style={{ fontSize: 10, color: C.mu, marginTop: 2 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Progress — full-width row (moved from bottom nav) */}
      <div onClick={() => nav('prog')} style={{
        display: 'flex', alignItems: 'center', gap: 14,
        background: C.c1, borderRadius: 16, padding: 16,
        cursor: 'pointer', border: `0.5px solid ${C.bdr}`, marginBottom: 16,
      }}>
        <div style={{
          width: 44, height: 44, background: C.acc, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <i className="ti ti-chart-line" style={{ fontSize: 22, color: C.txt }} aria-hidden="true" />
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.txt }}>My Progress</div>
          <div style={{ fontSize: 11, color: C.mu, marginTop: 2 }}>Weight, body metrics &amp; InBody</div>
        </div>
        <i className="ti ti-chevron-right" style={{ color: C.mu, marginLeft: 'auto' }} aria-hidden="true" />
      </div>

      <Divider />
      <div onClick={onSignOut} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 0', cursor: 'pointer' }}>
        <i className="ti ti-logout" style={{ fontSize: 18, color: C.rd }} aria-hidden="true" />
        <span style={{ fontSize: 13, color: C.rd }}>Sign Out</span>
      </div>
    </>
  )
}

// ─── Screen: Resources Hub ───────────────────────────────────────────────────

function Resources({ nav }) {
  return (
    <>
      <BackHeader onBack={() => nav('more')} title="Resources Hub" subtitle="Your programme materials" />
      <ResourceTile icon="ti-apple"            label="Meal Ideas"       sub="6 PDFs · Nutrition guides"  />
      <ResourceTile icon="ti-activity"         label="Stretch Guides"   sub="4 PDFs · Mobility cards"    />
      <ResourceTile icon="ti-video"            label="Induction Videos" sub="3 videos · Getting started" />
      <ResourceTile icon="ti-file-description" label="Programme PDFs"   sub="Your handbook"              />
    </>
  )
}

// ─── Screen: Community ───────────────────────────────────────────────────────

function Community({ nav }) {
  return (
    <>
      <BackHeader onBack={() => nav('more')} title="Community" subtitle="AF Hornchurch · Longevity" />
      <Card style={{ textAlign: 'center', padding: '32px 20px' }}>
        <div style={{ fontSize: 48, marginBottom: 13 }}>🏋️</div>
        <div style={{ fontSize: 17, fontWeight: 600, color: C.txt, marginBottom: 8 }}>Join Your Community</div>
        <div style={{ fontSize: 12, color: C.mu, lineHeight: 1.65, marginBottom: 22 }}>
          Connect with fellow Longevity Programme members. Share wins, ask questions, and stay motivated together.
        </div>
        {/* ── Replace href with the actual GHL community URL ── */}
        <a href="REPLACE_WITH_GHL_COMMUNITY_URL" target="_blank" rel="noreferrer" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
          background: C.txt, color: C.bg, borderRadius: 12, padding: '13px 24px',
          fontSize: 14, fontWeight: 700, cursor: 'pointer',
        }}>
          <i className="ti ti-external-link" style={{ fontSize: 16 }} aria-hidden="true" />
          Open Community
        </a>
      </Card>
    </>
  )
}

// ─── Screen: Get in Touch ────────────────────────────────────────────────────

function Contact({ nav }) {
  return (
    <>
      <BackHeader onBack={() => nav('more')} title="Get in Touch" subtitle="Reach the AF Hornchurch team" />
      <Card style={{ textAlign: 'center', padding: '24px 18px', marginBottom: 16 }}>
        <div style={{ fontSize: 42, marginBottom: 12 }}>💬</div>
        <div style={{ fontSize: 15, fontWeight: 600, color: C.txt, marginBottom: 8 }}>Need to reach us directly?</div>
        <div style={{ fontSize: 12, color: C.mu, lineHeight: 1.65 }}>
          Use the options below. A coach or team member will get back to you within 24 hours.
        </div>
      </Card>
      {/* ── Replace PHONENUMBER with digits only e.g. 447911123456 ── */}
      <a href="https://wa.me/PHONENUMBER" target="_blank" rel="noreferrer" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        background: '#25d366', color: C.txt, borderRadius: 12, padding: 14,
        fontSize: 14, fontWeight: 700, cursor: 'pointer', marginBottom: 10,
      }}>
        <i className="ti ti-brand-whatsapp" style={{ fontSize: 20 }} aria-hidden="true" />
        Message on WhatsApp
      </a>
      {/* ── Replace EMAIL with the gym's contact email ── */}
      <a href="mailto:EMAIL" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        background: C.acc, color: C.txt, borderRadius: 12, padding: 14,
        fontSize: 14, fontWeight: 700, cursor: 'pointer', marginBottom: 16,
      }}>
        <i className="ti ti-mail" style={{ fontSize: 20 }} aria-hidden="true" />
        Send an Email
      </a>
      <Card style={{ padding: '13px 15px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <i className="ti ti-info-circle" style={{ color: C.hi, fontSize: 17, flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
          <div style={{ fontSize: 12, color: C.mu, lineHeight: 1.6 }}>
            For programme questions, use the{' '}
            <span style={{ color: C.txt, fontWeight: 600 }}>Community</span>{' '}
            page where all coaches are available.
          </div>
        </div>
      </Card>
    </>
  )
}

// ─── Screen: My Profile ──────────────────────────────────────────────────────

function Profile({ nav, onSignOut }) {
  return (
    <>
      <BackHeader onBack={() => nav('more')} title="My Profile" />
      <div style={{ textAlign: 'center', padding: '4px 0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 11 }}>
          <Avatar initials="SC" size={68} fontSize={22} />
        </div>
        <div style={{ fontSize: 20, fontWeight: 600, color: C.txt }}>Sarah Clarke</div>
        <div style={{ fontSize: 12, color: C.mu, marginTop: 3 }}>sarah.clarke@email.com</div>
        <div style={{ marginTop: 9 }}><Badge type="pu">Longevity Programme</Badge></div>
      </div>
      <Card>
        <FieldLabel>Programme Details</FieldLabel>
        {[{ label: 'Start date', val: '18 April 2026' }, { label: 'Programme day', val: 'Day 34' }].map(({ label, val }, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '9px 0' }}>
              <span style={{ fontSize: 12, color: C.mu }}>{label}</span>
              <span style={{ fontSize: 12, color: C.txt }}>{val}</span>
            </div>
            <Divider />
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 9 }}>
          <span style={{ fontSize: 12, color: C.mu }}>Membership status</span>
          <Badge type="gn">Active</Badge>
        </div>
      </Card>
      <Card>
        <FieldLabel>Sessions</FieldLabel>
        {[{ label: 'Allowed per week', val: '1 session' }, { label: 'Used this week', val: '1 / 1' }].map(({ label, val }, i) => (
          <div key={i}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '9px 0' }}>
              <span style={{ fontSize: 12, color: C.mu }}>{label}</span>
              <span style={{ fontSize: 12, color: C.txt }}>{val}</span>
            </div>
            <Divider />
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 9 }}>
          <span style={{ fontSize: 12, color: C.mu }}>Total attended</span>
          <span style={{ fontSize: 12, color: C.txt }}>18 sessions</span>
        </div>
      </Card>
      <div onClick={onSignOut} style={{
        background: C.c2, color: C.rd, border: `0.5px solid rgba(248,113,113,0.25)`,
        borderRadius: 12, padding: 12, textAlign: 'center',
        fontSize: 14, cursor: 'pointer', fontFamily: FF, marginBottom: 14,
      }}>
        Sign Out
      </div>
    </>
  )
}

// ─── Screen: Coach — Appointments ────────────────────────────────────────────

function CoachAppointments() {
  const [statuses, setStatuses] = useState({
    'Sarah Clarke':  'showed',
    'David Patel':   'pending',
    'Margaret Owen': 'noshow',
    'Robert Kim':    'upcoming',
  })

  const sessions = [
    { name: 'Sarah Clarke',  time: '9:00 AM',  prog: 'Longevity' },
    { name: 'David Patel',   time: '10:00 AM', prog: '63-Day'    },
    { name: 'Margaret Owen', time: '11:00 AM', prog: 'Longevity' },
    { name: 'Robert Kim',    time: '2:00 PM',  prog: 'Longevity' },
  ]

  const badgeMap = {
    showed:    { type: 'gn', label: 'Showed'    },
    pending:   { type: 'am', label: 'Pending'   },
    noshow:    { type: 'rd', label: 'No Show'   },
    upcoming:  { type: 'am', label: 'Upcoming'  },
    cancelled: { type: 'rd', label: 'Cancelled' },
  }

  const mark = (name, status) => setStatuses(s => ({ ...s, [name]: status }))

  return (
    <>
      <div style={{ marginTop: 6, marginBottom: 4 }}>
        <div style={{ fontSize: 10, color: C.hi, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Coach View</div>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>Appointments</div>
        <div style={{ fontSize: 12, color: C.mu, marginTop: 2 }}>Thursday, 21 May 2026</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 11, marginTop: 13 }}>
        <div style={{ background: C.c1, borderRadius: 14, padding: 13, border: `0.5px solid ${C.bdr}` }}>
          <FieldLabel>Today</FieldLabel>
          <div style={{ fontSize: 22, fontWeight: 600, color: C.txt }}>6</div>
          <div style={{ fontSize: 10, color: C.mu, marginTop: 2 }}>sessions booked</div>
        </div>
        <div style={{ background: C.c1, borderRadius: 14, padding: 13, border: `0.5px solid ${C.bdr}` }}>
          <FieldLabel>Attended</FieldLabel>
          <div style={{ fontSize: 22, fontWeight: 600, color: C.gr }}>
            {Object.values(statuses).filter(s => s === 'showed').length}
          </div>
          <div style={{ fontSize: 10, color: C.mu, marginTop: 2 }}>marked so far</div>
        </div>
      </div>
      <SectionLabel>Today's Sessions</SectionLabel>
      {sessions.map(({ name, time, prog }) => {
        const status = statuses[name]
        const b = badgeMap[status]
        return (
          <Card key={name} style={{ marginBottom: 9 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.txt }}>{name}</div>
                <div style={{ fontSize: 10, color: C.mu }}>{time} · {prog}</div>
              </div>
              <Badge type={b.type}>{b.label}</Badge>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[
                { key: 'showed',    label: 'Showed',  bg: 'rgba(52,211,153,0.14)',  color: C.gr, border: 'rgba(52,211,153,0.35)'  },
                { key: 'noshow',    label: 'No Show', bg: 'rgba(248,113,113,0.14)', color: C.rd, border: 'rgba(248,113,113,0.35)' },
                { key: 'cancelled', label: 'Cancel',  bg: 'rgba(251,191,36,0.12)',  color: C.am, border: 'rgba(251,191,36,0.3)'   },
              ].map(({ key, label, bg, color, border }) => (
                <div key={key} onClick={() => mark(name, key)} style={{
                  flex: 1,
                  background: status === key ? bg : 'rgba(255,255,255,0.05)',
                  color:  status === key ? color : C.mu,
                  border: `0.5px solid ${status === key ? border : 'rgba(255,255,255,0.12)'}`,
                  borderRadius: 8, padding: '8px 4px', fontSize: 10,
                  fontWeight: 600, cursor: 'pointer', textAlign: 'center', fontFamily: FF,
                }}>
                  {label}
                </div>
              ))}
            </div>
          </Card>
        )
      })}
    </>
  )
}

// ─── Screen: Coach — Clients ─────────────────────────────────────────────────

function CoachClients() {
  const clients = [
    { init: 'SC', name: 'Sarah Clarke',  info: 'Longevity · Day 34 · Check-in Wk 4 ✓', badge: 'gn', label: 'Green',   risk: null    },
    { init: 'DP', name: 'David Patel',   info: '63-Day · Day 18 · Check-in Wk 2 ✓',    badge: 'gn', label: 'Green',   risk: null    },
    { init: 'MO', name: 'Margaret Owen', info: 'Longevity · Day 41 · 2 no-shows',        badge: 'am', label: '🟡 Risk', risk: 'amber' },
    { init: 'RK', name: 'Robert Kim',    info: 'Longevity · Day 12 · Check-in Wk 1 ✓', badge: 'gn', label: 'Green',   risk: null    },
    { init: 'JN', name: 'Janet Nguyen',  info: '63-Day · Day 28 · No check-in 3 weeks', badge: 'rd', label: '🔴 Flag', risk: 'red'   },
    { init: 'TB', name: 'Thomas Burke',  info: 'Longevity · Day 55 · Check-in Wk 7 ✓', badge: 'gn', label: 'Green',   risk: null    },
  ]
  const riskBg   = { amber: 'rgba(251,191,36,0.05)',  red: 'rgba(248,113,113,0.05)'  }
  const riskAvBg = { amber: 'rgba(251,191,36,0.2)',   red: 'rgba(248,113,113,0.2)'   }
  const riskCol  = { amber: C.am,                     red: C.rd                       }

  return (
    <>
      <div style={{ marginTop: 6, marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: C.hi, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Coach View</div>
        <div style={{ fontSize: 21, fontWeight: 600, color: C.txt }}>Client Overview</div>
      </div>
      <div style={{ position: 'relative', marginBottom: 12 }}>
        <i className="ti ti-search" style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: C.mu, fontSize: 15 }} aria-hidden="true" />
        <input placeholder="Search clients…" style={{ background: C.c2, border: `0.5px solid ${C.bdr}`, borderRadius: 11, padding: '9px 13px 9px 34px', color: C.txt, fontSize: 12, width: '100%', fontFamily: FF }} />
      </div>
      <div style={{ display: 'flex', gap: 5, marginBottom: 14, flexWrap: 'wrap' }}>
        {['All (24)', '🟡 At Risk (3)', '🔴 Flagged (1)'].map((f, i) => (
          <span key={i} style={{ background: i === 0 ? C.acc : C.c2, color: i === 0 ? C.txt : C.mu, borderRadius: 20, padding: '4px 11px', fontSize: 10, cursor: 'pointer', border: i > 0 ? `0.5px solid ${C.bdr}` : 'none', fontFamily: FF }}>
            {f}
          </span>
        ))}
      </div>
      {clients.map(({ init, name, info, badge, label, risk }) => (
        <div key={name} style={{
          display: 'flex', alignItems: 'center', gap: 9, padding: '11px 0',
          borderBottom: risk ? 'none' : `0.5px solid ${C.bdr}`,
          background: risk ? riskBg[risk] : 'transparent',
          borderRadius: risk ? 10 : 0, marginBottom: risk ? 3 : 0,
        }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', flexShrink: 0, background: risk ? riskAvBg[risk] : C.acc, color: risk ? riskCol[risk] : C.txt, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, fontFamily: FF }}>
            {init}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, color: C.txt, fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: 10, color: C.mu, marginTop: 1 }}>{info}</div>
          </div>
          <Badge type={badge} style={{ fontSize: 9 }}>{label}</Badge>
        </div>
      ))}
      <div style={{ height: 18 }} />
    </>
  )
}

// ─── Navigation constants (v6 — journal replaces prog in nav) ────────────────

const CLIENT_SCREENS = ['home','ci','book','journal','more','res','comm','contact','prof','prog']
const COACH_SCREENS  = ['ca','cc']

const CLIENT_NAV = [
  { id: 'home',    icon: 'ti-home',            label: 'Home'     },
  { id: 'book',    icon: 'ti-calendar',        label: 'Book'     },
  { id: 'ci',      icon: 'ti-clipboard-check', label: 'Check-In' },
  { id: 'journal', icon: 'ti-notebook',         label: 'Journal'  },
  { id: 'more',    icon: 'ti-dots',            label: 'More'     },
]

// prog is now a More sub-screen so maps to index 4 (More tab active)
const CLIENT_NAV_IDX = {
  home: 0, book: 1, ci: 2, journal: 3, more: 4,
  res: 4, comm: 4, contact: 4, prof: 4, prog: 4,
}

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [screen,      setScreen]      = useState('login')
  const [metricsOpen, setMetricsOpen] = useState(false)
  const [calDay,      setCalDay]      = useState(27)

  const nav = (s) => { setScreen(s); window.scrollTo(0, 0) }
  const goLogin = () => { setScreen('login'); setMetricsOpen(false) }

  const showClient = CLIENT_SCREENS.includes(screen)
  const showCoach  = COACH_SCREENS.includes(screen)

  return (
    <div style={{ minHeight: '100vh', background: C.bg, fontFamily: FF, color: C.txt, maxWidth: 480, margin: '0 auto', position: 'relative' }}>

      {/* Status bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 22px 6px', fontSize: 12, fontWeight: 600, flexShrink: 0 }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <i className="ti ti-wifi"      style={{ fontSize: 13 }} aria-hidden="true" />
          <i className="ti ti-battery-2" style={{ fontSize: 13 }} aria-hidden="true" />
        </div>
      </div>

      {/* Screen content */}
      <div style={{ padding: '0 16px', paddingBottom: showClient || showCoach ? 90 : 24 }}>
        {screen === 'login'   && <Login       onClient={() => nav('home')} onCoach={() => nav('ca')} />}
        {screen === 'home'    && <Home        nav={nav} />}
        {screen === 'ci'      && <CheckIn />}
        {screen === 'book'    && <BookSession calDay={calDay} setCalDay={setCalDay} />}
        {screen === 'journal' && <FoodJournal />}
        {screen === 'prog'    && <Progress    metricsOpen={metricsOpen} setMetricsOpen={setMetricsOpen} nav={nav} />}
        {screen === 'more'    && <More        nav={nav} onSignOut={goLogin} />}
        {screen === 'res'     && <Resources   nav={nav} />}
        {screen === 'comm'    && <Community   nav={nav} />}
        {screen === 'contact' && <Contact     nav={nav} />}
        {screen === 'prof'    && <Profile     nav={nav} onSignOut={goLogin} />}
        {screen === 'ca'      && <CoachAppointments />}
        {screen === 'cc'      && <CoachClients />}
      </div>

      {/* Client bottom nav */}
      {showClient && (
        <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: C.nav, borderTop: `0.5px solid ${C.bdr}`, display: 'flex', padding: '10px 0 20px', zIndex: 100 }}>
          {CLIENT_NAV.map(({ id, icon, label }, i) => (
            <div key={id} onClick={() => nav(id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer', fontSize: 10, fontFamily: FF, color: CLIENT_NAV_IDX[screen] === i ? C.txt : C.mu }}>
              <i className={`ti ${icon}`} style={{ fontSize: 20 }} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Coach bottom nav */}
      {showCoach && (
        <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: C.nav, borderTop: `0.5px solid ${C.bdr}`, display: 'flex', padding: '10px 0 20px', zIndex: 100 }}>
          {[
            { id: 'ca', icon: 'ti-calendar-event', label: 'Appointments' },
            { id: 'cc', icon: 'ti-users',           label: 'Clients'      },
          ].map(({ id, icon, label }) => (
            <div key={id} onClick={() => nav(id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer', fontSize: 10, fontFamily: FF, color: screen === id ? C.txt : C.mu }}>
              <i className={`ti ${icon}`} style={{ fontSize: 20 }} aria-hidden="true" />
              <span>{label}</span>
            </div>
          ))}
          <div onClick={goLogin} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer', fontSize: 10, fontFamily: FF, color: C.mu }}>
            <i className="ti ti-logout" style={{ fontSize: 20 }} aria-hidden="true" />
            <span>Sign Out</span>
          </div>
        </div>
      )}
    </div>
  )
}
