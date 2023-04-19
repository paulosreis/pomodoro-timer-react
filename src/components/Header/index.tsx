import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import { GithubLogo, Timer, Scroll } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <a href="https://github.com/paulosreis">
        <GithubLogo size={56} />
      </a>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
