import { NavLink } from 'react-router-dom'
import { agency, nav } from '../content/site'
import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/40">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-lg font-semibold tracking-tight text-white">{agency.name}</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-300">{agency.positioning}</p>
            <p className="mt-4 text-xs text-zinc-400">
              Based in {agency.location}. Under {agency.parent}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-white">Pages</div>
            <div className="mt-3 flex flex-col gap-2">
              {nav.map((item) => (
                <NavLink key={item.href} to={item.href} className="text-sm text-zinc-300 hover:text-white">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-white">Clients</div>
            <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-zinc-300">
              {agency.clients.map((c) => (
                <div key={c} className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {agency.name}. All rights reserved.</div>
          <div className="text-zinc-500">Built for a premium, conversion-focused agency presence.</div>
        </div>
      </Container>
    </footer>
  )
}

