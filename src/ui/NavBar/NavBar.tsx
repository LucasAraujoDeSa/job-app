import Link from 'next/link'
import React from 'react'
import { Container, LeftSide, RightSide } from './snavBar'




export const NavBar: React.FC = (): JSX.Element => {
  return(
    <Container>
      <LeftSide>
        <Link href="/">
          <a>
            <h1>jobFinder</h1>
          </a>
        </Link>
      </LeftSide>
      <RightSide>
        <Link href="/job/NewJob">
          <button>
            <a>New Job</a>
          </button>
        </Link>
      </RightSide>
    </Container>
  )
}
