import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Container from '../components/Container'
import { ButtonLink } from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { services } from '../content/site'

const process = [
  { title: 'Discover', text: 'Goals, audience, competitive context, and clear success metrics.' },
  { title: 'Design', text: 'Messaging, creative direction, and a system built to scale.' },
  { title: 'Launch', text: 'Go-live with a clean rollout plan across channels.' },
  { title: 'Iterate', text: 'Measure what matters, improve what converts, repeat.' },
]

export default function Services() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionHeading kicker="Services" title="A full-stack creative & marketing system.">
          Pick a single deliverable or build a complete growth engine — strategy, content, and performance working together.
        </SectionHeading>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xl font-semibold text-white">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.description}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-zinc-200">
                    <CheckCircle2 className="mt-0.5 size-4 text-cyan-200" />
                    <span className="leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[2.5rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-12">
          <SectionHeading kicker="How we work" title="Fast, clear, and conversion-minded.">
            A simple process that keeps momentum high and stakeholders aligned.
          </SectionHeading>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="rounded-3xl bg-zinc-950/40 p-6 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-wide text-zinc-300">Step {i + 1}</div>
                <div className="mt-2 text-lg font-semibold text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/contact" variant="primary" className="justify-center">
              Get a proposal <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink to="/work" variant="secondary" className="justify-center">
              See work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

