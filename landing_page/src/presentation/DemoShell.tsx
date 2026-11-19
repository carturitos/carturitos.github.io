import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { copy } from './copy'
import { LanguageSwitch } from './PresentationHome'
import { usePresentation } from './usePresentation'
export function DemoShell({ children }: { children: ReactNode }) {
  const route = usePresentation()
  const t = copy[route.locale]
  return (
    <>
      <div className="demo-context" id="demo-context" role="note">
        <div>
          <strong>{t.demoLabel}</strong>
          <p>{t.demoNotice}</p>
        </div>
        <div className="demo-context-actions">
          <Link to={`${route.homeHref}#projects`}>{t.returnHome} ↗</Link>
          <LanguageSwitch />
        </div>
      </div>
      <div lang="es">{children}</div>
    </>
  )
}
