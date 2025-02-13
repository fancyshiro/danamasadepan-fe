import { Spinner } from "@heroui/react";
import { ReactNode } from "react";

interface FetchStateProps {
  isLoading: boolean;
  isFetched: boolean;
  dataLength: number;
  loadingMessage?: string;
  emptyMessage?: string;
  children: ReactNode;
}

const FetchState = ({ isLoading, isFetched, dataLength, loadingMessage = "Memuat data...", emptyMessage = "Tidak ada data ditemukan", children }: FetchStateProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12 bg-white dark:bg-neutral-900/70">
        <Spinner />
        {/* <p className="ml-2 text-gray-500">{loadingMessage}</p> */}
      </div>
    );
  }

  if (isFetched && dataLength === 0) {
    return (
      <div className="flex justify-center items-center py-12 bg-white dark:bg-neutral-900/70">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default FetchState;
