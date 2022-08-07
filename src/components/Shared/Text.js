import styled from 'styled-components';
import {
  color,
  layout,
  typography,
  space,
  border,
  shadow,
} from 'styled-system';

export const Text = styled('p')(
  color,
  layout,
  typography,
  space,
  border,
  shadow
);
