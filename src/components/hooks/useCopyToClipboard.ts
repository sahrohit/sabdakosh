"use client";

import { useCallback, useState } from "react";

const useCopyToClipboard = () => {
  const [state, setState] = useState<{
    error: Error | null;
    text: string | null;
  }>({
    error: null,
    text: null,
  });

  const copyToClipboard = useCallback(async (value: string) => {
    if (!navigator?.clipboard) {
      return setState({
        error: new Error("Clipboard not supported"),
        text: null,
      });
    }

    const handleSuccess = () => {
      setState({
        error: null,
        text: value,
      });
    };

    const handleFailure = (e: any) => {
      setState({
        error: e,
        text: null,
      });
    };

    navigator.clipboard.writeText(value).then(handleSuccess, handleFailure);
  }, []);

  return [state, copyToClipboard];
};

export default useCopyToClipboard;
