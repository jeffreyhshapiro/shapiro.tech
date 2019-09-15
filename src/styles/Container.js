import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${space}
  ${layout}
  ${color}
  ${border}
`
