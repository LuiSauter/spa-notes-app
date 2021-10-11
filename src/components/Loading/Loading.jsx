import { useLoading, ThreeDots } from '@agney/react-loading'
import styled from 'styled-components'

const Load = styled.div`
  display: flex;
  justify-content: center
`

export default function Loading () {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width='50' />
  })

  return (
    <Load>
      <section {...containerProps}>
        {indicatorEl} {/* renders only while loading */}
      </section>
    </Load>
  )
}
