import "../src/styles/globals.scss";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { QueryClientProvider } from "react-query";

import { queryClient } from "../src/services/queryClient";

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: "custom-light",
    values: [
      {
        name: "custom-light",
        value: "#dee0e4"
      },
      {
        name: "custom-dark",
        value: "#42464d"
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
];
