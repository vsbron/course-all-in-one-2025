import styled from "styled-components";

function About() {
  // Returned JSX
  return (
    <StyledAbout>
      <h3>About Us</h3>
      <p>
        Introducing "MixMaster," the ultimate party sidekick app that fetches
        cocktails from the hilarious Cocktails DB API. With a flick of your
        finger, you'll unlock a treasure trove of enchanting drink recipes
        that'll make your taste buds dance and your friends jump with joy. Get
        ready to shake up your mixology game, one fantastical mocktail at a
        time, and let the laughter and giggles flow!
      </p>
    </StyledAbout>
  );
}

// Styled components
const StyledAbout = styled.div`
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default About;
