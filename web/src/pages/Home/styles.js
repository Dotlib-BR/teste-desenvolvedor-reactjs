import styled from "styled-components";

export const GridContainer = styled.main`
  width: 100%;
  height: calc(100vh - 30px);
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 40px repeat(minmax(1fr, 2fr));

  grid-template-areas:
    "sidebar content"
    "sidebar content"
    "sidebar content";
`;
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`;
