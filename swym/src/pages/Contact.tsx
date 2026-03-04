import { ArrowRight, Mail, MapPin } from 'lucide-react'
import { useMemo, useState } from 'react'
import Container from '../components/Container'
import { Button } from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../content/site'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const canSend = useMemo(() => {
    return form.name.trim() && form.email.trim() && form.message.trim()
  }, [form.email, form.message, form.name])

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading kicker="Contact" title="Tell us what you’re building.">
              We’ll come back with a clear plan, timeline, and the deliverables we recommend.
            </SectionHeading>

            <div className="mt-8 grid gap-3">
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 text-cyan-200" />
                  <div>
                    <div className="text-sm font-semibold text-white">Location</div>
                    <div className="mt-1 text-sm text-zinc-300">{agency.location}</div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 text-fuchsia-300" />
                  <div>
                    <div className="text-sm font-semibold text-white">Email</div>
                    <div className="mt-1 text-sm text-zinc-300">
                      Add your preferred contact email here (UI placeholder).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-12">
              <div className="text-sm font-semibold text-white">Project enquiry</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                This form is currently UI-only (no backend). It’s ready to wire into your CRM, email service, or API.
              </p>

              <form
                className="mt-8 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (!canSend) return
                  setStatus('sent')
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-zinc-300">Name</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="h-11 rounded-2xl bg-zinc-950/40 px-4 text-sm text-white ring-1 ring-white/10 outline-none focus:ring-white/25"
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs font-medium text-zinc-300">Email</span>
                    <input
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="h-11 rounded-2xl bg-zinc-950/40 px-4 text-sm text-white ring-1 ring-white/10 outline-none focus:ring-white/25"
                      placeholder="you@company.com"
                      type="email"
                      required
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-medium text-zinc-300">Company (optional)</span>
                  <input
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                    className="h-11 rounded-2xl bg-zinc-950/40 px-4 text-sm text-white ring-1 ring-white/10 outline-none focus:ring-white/25"
                    placeholder="Company name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium text-zinc-300">What do you need?</span>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="min-h-32 resize-y rounded-2xl bg-zinc-950/40 px-4 py-3 text-sm text-white ring-1 ring-white/10 outline-none focus:ring-white/25"
                    placeholder="A few lines about goals, timelines, and channels…"
                    required
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-zinc-400">
                    By sending, you agree we may contact you about this enquiry.
                  </div>
                  <Button type="submit" variant="primary" className="justify-center">
                    {status === 'sent' ? 'Sent (UI)' : 'Send message'} <ArrowRight className="size-4" />
                  </Button>
                </div>
              </form>

              {status === 'sent' ? (
                <div className="mt-6 rounded-2xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 ring-1 ring-emerald-400/20">
                  Message captured in the UI. Connect this form to your backend/CRM to deliver messages.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

