import { useState, type FormEvent } from 'react'
import logoWordmark from '../assets/logos/logo-wordmark.png'
import logoWordmarkMono from '../assets/logos/logo-wordmark-mono.png'

const CONTACT_EMAIL = 'hello@ceroinfi.com'

function Contact() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Diagnostic conversation — ${company || name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="text-white">
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center sm:px-8 lg:px-12">
        <img
          src={logoWordmark}
          alt="CeroInfi — Learn, Grow, Repeat"
          className="mx-auto mb-8 h-12 w-auto sm:h-14"
        />
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-subtle">
          Getting Started
        </p>
        <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-6xl">
          Start with a diagnostic conversation.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-body">
          Every engagement starts with a short, no-obligation conversation to understand your
          current challenges and priorities. From there, we recommend a starting point: one
          workshop, one program, or a phased roadmap across the year.
        </p>
      </section>

      <section className="relative overflow-hidden px-6 pb-28 sm:px-8 lg:px-12">
        <img
          src={logoWordmarkMono}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[140%] max-w-4xl -translate-x-1/2 -translate-y-1/2 opacity-[0.05] sm:w-[85%]"
        />
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto max-w-2xl rounded-[1.5rem] border border-white/12 bg-surface p-8 shadow-[0_10px_40px_rgba(37,42,52,0.08)] sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white transition-colors placeholder:text-[#6B7280] focus:border-[#006B84]"
                placeholder="Jane Doe"
              />
            </Field>
            <Field label="Company">
              <input
                required
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white transition-colors placeholder:text-[#6B7280] focus:border-[#006B84]"
                placeholder="Acme Inc."
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="Work email">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white transition-colors placeholder:text-[#6B7280] focus:border-[#006B84]"
                placeholder="jane@acme.com"
              />
            </Field>
          </div>

          <div className="mt-5">
            <Field label="What are you looking to solve?">
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white transition-colors placeholder:text-[#6B7280] focus:border-[#006B84]"
                placeholder="e.g. our first-time managers are struggling, or our 90-day attrition is climbing..."
              />
            </Field>
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
          >
            Send &rarr;
          </button>
          <p className="mt-4 text-center text-xs text-subtle">
            Opens your email client with this addressed to {CONTACT_EMAIL}.
          </p>
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
