import styled from 'styled-components';
import { space } from 'styled-system';

export const UnorderedList = styled.ul`
  ${space}
`;

export const ListItem = styled.li`
  position: relative;
  list-style-type: none;
  ${space}

  ${props => {
    if (props.includeBullet) {
      return `
        &::after {
        content: '>'; 
        position: absolute;
        left: -${props.theme.space[3]}px;
        top: 0;
        color: crimson;
      }`
    }
  }}
`;