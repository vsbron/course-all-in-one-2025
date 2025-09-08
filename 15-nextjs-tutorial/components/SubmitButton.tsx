import { useFormStatus } from "react-dom";

import { btnStyle } from "@/utils/styles";

function SubmitButton() {
  // Get the form status
  const { pending } = useFormStatus();

  // Returned JSX
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
