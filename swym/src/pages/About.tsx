import { ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import { ButtonLink } from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { agency } from '../content/site'

const values = [
  {
    title: 'Clarity beats clutter',
    text: 'We simplify messaging and structure so the audience knows what to do next.',
  },
  {
    title: 'Premium, not generic',
    text: 'Design choices, motion, and copy are tuned for a high-end feel.',
  },
  {
    title: 'Systems > one-offs',
    text: 'We build reusable creative systems so your brand scales consistently.',
  },
  {
    title: 'Performance mindset',
    text: 'Creative is crafted with testing and iteration in mind from day one.',
  },
]

export default function About() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading kicker="About" title="Dubai-based, conversion-focused, creatively obsessive.">
              {agency.name} is a creative & digital marketing agency in {agency.location}, operating under {agency.parent}.
            </SectionHeading>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">What we do</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  We combine brand thinking, content systems, and performance marketing into one cohesive delivery — so you
                  get a consistent look, voice, and conversion path across every touchpoint.
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
                <div className="text-sm font-semibold text-white">Who we work with</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  Teams that care about quality and outcomes — from emerging brands to established operators who need a
                  sharper creative system and stronger performance loop.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {agency.clients.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="primary" className="justify-center">
                Work with us <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink to="/work" variant="secondary" className="justify-center">
                See our work
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.25),transparent_60%),radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.18),transparent_60%)] p-8 ring-1 ring-white/10 sm:p-10">
              <div className="text-sm font-semibold text-white">How we show up</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200/90">
                Fast communication, clean timelines, and deliverables that look premium — built as a system you can run
                every month.
              </p>
              <div className="mt-8 grid gap-3">
                {values.map((v) => (
                  <div key={v.title} className="rounded-2xl bg-zinc-950/40 p-5 ring-1 ring-white/10">
                    <div className="text-sm font-semibold text-white">{v.title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-zinc-300">{v.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

