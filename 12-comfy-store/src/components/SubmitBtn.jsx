import { useNavigation } from "react-router-dom";

function SubmitBtn({ text }) {
  // Get the navigation object from the hook
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Returned JSX
  return (
    <button
      className="btn btn-primary btn-block uppercase"
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "Submit"
      )}
    </button>
  );
}

export default SubmitBtn;
