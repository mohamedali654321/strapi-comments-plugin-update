import styled from 'styled-components';

import { colors, sizes } from 'strapi-helper-plugin';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - ${sizes.header.height});
  min-height: calc(100vh - ${sizes.header.height});
  max-height: calc(100vh - ${sizes.header.height});
  background-color: ${colors.leftMenu.mediumGrey};
  padding-top: 1.8rem;
  padding-left: 2rem;
  padding-right: 2rem;

  overflow-x: hidden;
  overflow-y: auto;
`;

export default Wrapper;