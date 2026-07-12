import { useState, type FormEvent } from 'react'

const CONTACT_EMAIL = 'ceroinfi@gmail.com'

function Contact() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Diagnostic conversation: ${company || name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="text-black">
      {/* ── Header — dark ── */}
      <section className="bg-ink px-6 pb-[clamp(4rem,8vw,6rem)] pt-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white text-balance">
            Start with a diagnostic conversation.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60 sm:text-xl sm:leading-9">
            Every engagement starts with a short, no-obligation conversation to understand your
            current challenges and priorities. From there, we recommend a starting point: one
            workshop, one program, or a phased roadmap across the year.
          </p>
        </div>
      </section>

      {/* ── Form — light ── */}
      <section className="px-6 py-[clamp(4rem,10vw,7rem)] sm:px-8 lg:px-10">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-2xl border border-black/8 bg-surface p-8 sm:p-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-black/12 bg-white px-4 py-3 text-sm text-black transition-colors placeholder:text-subtle/60 focus:border-accent-safe"
                placeholder="Jane Doe"
              />
            </Field>
            <Field label="Company">
              <input
                required
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-black/12 bg-white px-4 py-3 text-sm text-black transition-colors placeholder:text-subtle/60 focus:border-accent-safe"
                placeholder="Acme Inc."
              />
            </Field>
          </div>

          <div className="mt-6">
            <Field label="Work email">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-black/12 bg-white px-4 py-3 text-sm text-black transition-colors placeholder:text-subtle/60 focus:border-accent-safe"
                placeholder="jane@acme.com"
              />
            </Field>
          </div>

          <div className="mt-6">
            <Field label="What are you looking to solve?">
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-black/12 bg-white px-4 py-3 text-sm text-black transition-colors placeholder:text-subtle/60 focus:border-accent-safe"
                placeholder="e.g. our first-time managers are struggling, or our 90-day attrition is climbing..."
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Send &rarr;
          </button>
        </form>
      </section>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-subtle">
        {label}
      </span>
      {children}
    </label>
  )
}

export default Contact
