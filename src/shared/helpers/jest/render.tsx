import { ThemeProvider } from "@emotion/react";
import { queryClient } from "@src/shared/infra/clients/queryClient";

import { QueryBoundaries } from "@src/shared/view/components/QueryBoundaries/QueryBoundaries.component";
import { ToastService } from "@src/shared/view/services/ToastService/Toast.service";
import { theme } from "@src/shared/view/theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RenderOptions,
  // eslint-disable-next-line testing-library/no-manual-cleanup
  cleanup,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// This may seem like a hack but it's reliable. afterEach hooks always run when we expect them too
let afterEachHook: (() => void) | undefined = undefined;
afterEach(() => {
  afterEachHook?.();
  afterEachHook = undefined;
});

export const wrapAndRender = (
  component: React.ReactElement,
  options?: RenderOptions,
) => {
  const frame = { x: 0, y: 0, width: 0, height: 0 };
  const insets = { top: 0, left: 0, right: 0, bottom: 0 };

  // In case there are multiple `renderWithQueries` calls in the same test, cleanup
  afterEachHook?.();

  // TODO: clean reusable solution logging
  // The idea is that in tests, you don't want to log known errors (you often write tests for these so it would be annoying)
  // But you want to log unknown errors, otherwise debugging tests is hell
  // setLogger(/* */);

  const waitForQueries = async () => {
    await waitFor(() => {
      assertNoPendingQueries(queryClient);
    });
  };

  afterEachHook = () => {
    // React cleanup should happen before waiting for queries, otherwise strange things happen
    cleanup();

    // Pending queries when a test end can cause multiple problems
    // - Not testing what you think you do (loaders in snapshots...)
    // - Test independence problems
    // - "Jest did not exit..." errors
    // -> This is important
    assertNoPendingQueries(queryClient);

    // This is a workaround for https://github.com/tannerlinsley/react-query/issues/1847
    queryClient.clear();
  };

  const renderResult = render(component, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider
          initialMetrics={{
            frame,
            insets,
          }}
        >
          <ThemeProvider theme={theme}>
            <QueryBoundaries>{children}</QueryBoundaries>
            <ToastService.Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    ),
    ...options,
  });

  return {
    ...renderResult,
    /**
     * When it's too complicated / not important for a test to wait for pending queries by checking UI elements
     * This function can be used as a fallback
     */
    waitForQueries,
  };
};

afterEach(() => {
  queryClient.clear();
});

export const waitForLoaders = () => {
  return waitFor(() => {
    const loader = screen.queryByTestId("activity-indicator");
    if (loader) throw new Error("Loader still visible");
  });
};

const assertNoPendingQueries = (queryClient: QueryClient) => {
  // Not using queryClient.isFetching() / isMutating() because we want to log details on the queries
  // const pendingQueries = queryClient
  //   .getQueryCache()
  //   .findAll(undefined)
  //   // The `filter` param of `.findAll` seems to be unreliable, so we filter manually (v3.16.0 de react-query, might have changed that)
  //   .filter((query) => query.isFetching())
  //   .map((query) => JSON.stringify(query.queryKey));
  const numberOfPendingQueries = queryClient.isFetching();

  if (numberOfPendingQueries > 0) {
    throw new Error(`Some queries still pending:\n${numberOfPendingQueries}`);
  }

  const pendingMutations = queryClient
    .getMutationCache()
    .findAll({})
    // The `filter` param of `.findAll` seems to be unreliable, so we filter manually (v3.16.0 de react-query, might have changed that)
    .filter((mutation) => mutation.state.status === "loading");

  if (pendingMutations.length > 0) {
    throw new Error(`${pendingMutations.length} mutations still pending`);
  }
};
