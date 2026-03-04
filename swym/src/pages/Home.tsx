import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { ButtonLink } from '../components/Button'
import { agency, caseStudies, services } from '../content/site'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10">
                <Sparkles className="size-4 text-fuchsia-300" />
                {agency.name} • {agency.location} • Under {agency.parent}
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Creative that looks premium.
                <span className="block bg-gradient-to-r from-fuchsia-300 via-white to-cyan-200 bg-clip-text text-transparent">
                  Marketing that performs.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
                {agency.positioning}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink to="/contact" variant="primary" className="justify-center">
                  Start a project <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink to="/work" variant="ghost" className="justify-center">
                  See our work
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { k: 'Strategy-first', v: 'Clear positioning + messaging before pixels.' },
                  { k: 'Creative systems', v: 'Assets designed to scale across channels.' },
                  { k: 'Conversion focus', v: 'Every piece earns attention and drives action.' },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
                  >
                    <div className="text-sm font-semibold text-white">{item.k}</div>
                    <div className="mt-1 text-sm leading-relaxed text-zinc-300">{item.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading kicker="Capabilities" title="Everything you need to launch, grow, and scale.">
              Creative, content, and performance — delivered as a cohesive system so your brand feels consistent everywhere.
            </SectionHeading>
            <div className="flex gap-3">
              <ButtonLink to="/services" variant="secondary">
                Explore services <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-lg font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-gradient-to-r from-fuchsia-300 to-cyan-200" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading kicker="Selected work" title="Recent projects for Dubai-based brands.">
              A snapshot of the kind of outcomes we design for — clarity, consistency, and conversion-ready creative.
            </SectionHeading>
            <div className="flex gap-3">
              <ButtonLink to="/work" variant="secondary">
                View all work <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.client} className="group rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-sm text-zinc-300">{c.client}</div>
                <div className="mt-2 text-lg font-semibold text-white">{c.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">{c.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
                <ul className="mt-4 grid gap-2 text-sm text-zinc-200">
                  {c.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-cyan-200/80" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.25),transparent_60%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.18),transparent_60%)] p-8 ring-1 ring-white/10 sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-medium tracking-wide text-zinc-200">
                  Current clients include
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {agency.clients.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/10"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to build a brand people remember?
                </h2>
                <p className="mt-3 text-pretty text-base leading-relaxed text-zinc-200/90">
                  Tell us what you’re launching, fixing, or scaling — we’ll come back with a clear plan and the creative to match.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/contact" variant="primary" className="justify-center">
                  Let’s talk <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink to="/services" variant="ghost" className="justify-center">
                  See deliverables
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

