"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Input,
  Pagination,
  Spinner
} from "@heroui/react";
import { BiSearch } from "react-icons/bi";

// Types untuk props
type Column = {
  key: string;
  label: string;
  renderCell?: (item: any) => React.ReactNode;
};

type TableProps = {
  columns: Column[];
  data: any[];
  title?: string;
  isLoading?: boolean;
  rowsPerPage?: number;
  searchPlaceholder?: string;
  classNames?: {
    wrapper?: string;
    table?: string;
    title?: string;
    search?: string;
    pagination?: string;
  };
};

export default function DataTable({
  columns,
  data,
  title = "",
  isLoading = false,
  rowsPerPage = 5,
  searchPlaceholder = "Cari...",
  classNames = {}
}: TableProps) {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter data berdasarkan search
  const filteredData = data.filter((item) =>
    Object.entries(item).some(([key, value]) => {
      // Hanya cari di kolom yang ada di columns
      if (columns.find((col) => col.key === key)) {
        return (
          value &&
          value.toString().toLowerCase().includes(searchValue.toLowerCase())
        );
      }
      return false;
    })
  );

  // Hitung total pages
  const pages = Math.ceil(filteredData.length / rowsPerPage);

  // Get current page data
  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className={`w-full space-y-4 ${classNames.wrapper}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {title && <h1 className={`text-2xl font-bold ${classNames.title}`}>{title}</h1>}
        <div className={`relative w-full sm:w-72 ${classNames.search}`}>
          <Input
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            startContent={<BiSearch className="text-gray-400" size={20} />}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table
          aria-label="Data Table"
          className={classNames.table}
          bottomContent={
            pages > 1 ? (
              <div className={`flex justify-center ${classNames.pagination}`}>
                <Pagination
                  total={pages}
                  page={currentPage}
                  onChange={setCurrentPage}
                />
              </div>
            ) : null
          }
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key}>
                {column.label}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody emptyContent="Tidak ada data">
            {currentData.map((item, index) => (
              <TableRow key={index} className="h-16">
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.renderCell ? column.renderCell(item) : item[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}