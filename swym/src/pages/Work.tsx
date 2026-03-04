import { ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import { ButtonLink } from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { caseStudies } from '../content/site'

export default function Work() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Work" title="A focused set of recent client engagements.">
            Built as systems — so creative stays consistent and performance stays measurable.
          </SectionHeading>
          <div className="flex gap-3">
            <ButtonLink to="/contact" variant="secondary">
              Start a project <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article key={c.client} className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
              <div className="text-sm text-zinc-300">{c.client}</div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{c.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-200 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold tracking-wide text-zinc-300">Deliverables</div>
                <ul className="mt-3 grid gap-2 text-sm text-zinc-200">
                  {c.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 rounded-full bg-gradient-to-r from-fuchsia-300 to-cyan-200" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[2.5rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-white">Want a similar system for your brand?</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                We’ll map the customer journey, build a creative direction, then ship assets that scale across channels.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact" variant="primary" className="justify-center">
                Let’s talk <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink to="/services" variant="ghost" className="justify-center">
                Explore services
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

