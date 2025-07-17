import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

// Fetch url
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  // Create state value for isLoading, jobs and current job
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  // useEffect function for fetching the data
  useEffect(() => {
    // Create the controller for cleanup functions
    const controller = new AbortController();
    const signal = controller.signal;

    // Create the fetch function
    const fetchJobs = async () => {
      try {
        // Enable the loading state
        setIsLoading(true);

        // Fetch the data
        const response = await fetch(url, { signal });
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        console.error("Fetch error:", error);
      } finally {
        // Disable loading state
        setIsLoading(false);
      }
    };

    // Call the fetch function
    fetchJobs();

    // Cleanup function
    return () => controller.abort();
  }, []);

  // Guard clause
  if (jobs.length === 0 || isLoading)
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );

  // Returned JSX
  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
