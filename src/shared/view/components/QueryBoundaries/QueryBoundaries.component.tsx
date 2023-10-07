import { QueryErrorResetBoundary } from "@tanstack/react-query";
import React from "react";
import type { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorView } from "@src/shared/view/components/ErrorView/ErrorView.component";
import { LoaderView } from "@src/shared/view/components/LoaderView/LoaderView.component";

export type ErrorFallbackProps = FallbackProps;

type Props = {
  children: React.ReactNode;
  ErrorFallback?: React.FC<ErrorFallbackProps> | undefined;
  LoaderFallback?: React.FC | undefined;
};

export const QueryBoundaries = ({
  children,
  ErrorFallback,
  LoaderFallback,
}: Props) => {
  return (
    <QueryErrorBoundary ErrorFallback={ErrorFallback}>
      <React.Suspense
        fallback={LoaderFallback ? <LoaderFallback /> : <LoaderView />}
      >
        {children}
      </React.Suspense>
    </QueryErrorBoundary>
  );
};

type ErrorProps = {
  children: React.ReactNode;
  ErrorFallback?: React.FC<ErrorFallbackProps> | undefined;
};

export const QueryErrorBoundary = ({ children, ErrorFallback }: ErrorProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => {
        return (
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={ErrorFallback ?? ErrorBoundaryView}
          >
            {children}
          </ErrorBoundary>
        );
      }}
    </QueryErrorResetBoundary>
  );
};

const ErrorBoundaryView = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return <ErrorView error={error} onRetry={resetErrorBoundary} />;
};
