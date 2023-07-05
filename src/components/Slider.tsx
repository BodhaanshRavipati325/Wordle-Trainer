import React, { ReactNode } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import styles from '/Users/bodhaanshravipati/wordle-test/tutorial-react-wordle-completed/src/styles.module.css'

interface SliderProps {
  message?: string;
}

const left = {
  bg: `white`,
  justifySelf: 'end',
}
const right = {
  bg: `white`,
  justifySelf: 'start',
}

const Slider = ({ children }: { children: ReactNode }) => {
  const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
    x: 0,
    scale: 1,
    ...left,
  }))
  const bind = useDrag(({ active, movement: [x] }) =>
    api.start({
      x: active ? x : 0,
      scale: active ? 1.1 : 1,
      ...(x < 0 ? left : right),
      immediate: name => active && name === 'x',
    })
  )

  const avSize = x.to({
    map: Math.abs,
    range: [50, 300],
    output: [0.5, 1],
    extrapolate: 'clamp',
  })

  return (
    <animated.div {...bind()} className={styles.item} style={{ background: bg }}>
      <animated.div className={styles.av} style={{ scale: avSize, justifySelf }} />
      <animated.div className={styles.fg} style={{ x, scale }}>
        {children}
      </animated.div>
    </animated.div>
  )
}

export default function App({message}: SliderProps) {
  return (
    <div className={styles.container}>
      <Slider>
        {message}
      </Slider>
    </div>
  )
}