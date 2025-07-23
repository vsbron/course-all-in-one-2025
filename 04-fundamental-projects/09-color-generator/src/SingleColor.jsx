import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  // Destructuring the color
  const { hex, weight } = color;

  // Create the click handler function
  const handleClick = async () => {
    // Check if we have clipboard access
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy the color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  // Returned JSX
  return (
    <article
      className={`color ${index > 10 ? "color-light" : ""}`}
      style={{ background: `#${hex}` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
