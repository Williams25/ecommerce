import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useDrawer = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const router = useRouter();

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
    [isDrawer, router.asPath]
  );

  useEffect(() => {
    toggleDrawer(false);
  }, [router.asPath]);

  return {
    toggleDrawer,
    isDrawer
  };
};
