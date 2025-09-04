import {
  useEffect
} from "react";

const usePolling = (chart) => {
  useEffect(() => {
    if (!chart) return;

    const refreshChart = () => {
      chart.reRender();
    };

    refreshChart(); // Initial refresh
    const interval = setInterval(refreshChart, 5000);

    return () => clearInterval(interval);
  }, [chart]);
};

export default usePolling;