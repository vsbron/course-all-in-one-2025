import { Form, useNavigation } from "react-router-dom";
import styled from "styled-components";

function SearchForm() {
  // Getting the navigation state object from thr hook
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Returned JSX
  return (
    <StyledSearchForm>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue="Beer"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </StyledSearchForm>
  );
}

export default SearchForm;

// Styled components
const StyledSearchForm = styled.div`
  margin-bottom: 6rem;
  .form {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
