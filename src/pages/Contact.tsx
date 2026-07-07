import { useState, type FormEvent } from 'react'

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
    <div className="bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center sm:px-8 lg:px-12">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/55">
          Getting Started
        </p>
        <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-6xl">
          Start with a diagnostic conversation.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
          Every engagement starts with a short, no-obligation conversation to understand your
          current challenges and priorities. From there, we recommend a starting point: one
          workshop, one program, or a phased roadmap across the year.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-28 sm:px-8 lg:px-12">
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name">
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
                placeholder="Jane Doe"
              />
            </Field>
            <Field label="Company">
              <input
                required
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
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
                className="w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
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
                className="w-full resize-none rounded-lg border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40"
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
          <p className="mt-4 text-center text-xs text-white/40">
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
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.1em] text-white/50">
        {label}
      </span>
      {children}
    </label>
  )
}

export default Contact
