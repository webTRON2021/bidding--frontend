import { useEffect } from "react";
const useScrollTop = () => {
  // for go to scroll top
  useEffect(() => {
    handleScrollToTop();
  });

  //   scroll top top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
};

export default useScrollTop;
