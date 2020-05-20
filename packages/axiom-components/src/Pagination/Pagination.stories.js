import React, { useState } from "react";
import Pagination from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
};

export function Default() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(page) => setCurrentPage(page)}
      totalPages={100}
    />
  );
}
