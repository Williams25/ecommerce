import { useCallback, useState } from "react";

export const useDrawer = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);

  const toggleDrawer = useCallback(
    (toggle: boolean) => {
      if (toggle) {
        setIsDrawer(true);
        document?.getElementById("body")?.classList.remove("scroll");
        document?.getElementById("body")?.classList.add("hidden-scroll");
      } else {
        setIsDrawer(false);
        document?.getElementById("body")?.classList.remove("hidden-scroll");
        document?.getElementById("body")?.classList.add("scroll");
      }
    },
    [isDrawer]
  );

  return {
    toggleDrawer,
    isDrawer
  };
};
