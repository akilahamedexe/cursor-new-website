import type { PropsWithChildren, ReactNode } from 'react'

export default function SectionHeading({
  kicker,
  title,
  children,
}: PropsWithChildren<{ kicker?: ReactNode; title: ReactNode }>) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children ? <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-300">{children}</p> : null}
    </div>
  )
}

