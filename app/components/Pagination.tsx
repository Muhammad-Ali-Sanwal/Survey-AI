"use client";

import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  totalUsers?: number;
  onPageChange?: (page: number) => void;
  usersOnPage?: number;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  totalUsers = 8,
  onPageChange,
  usersOnPage,
}: PaginationProps) {
  const handlePageChange = (page: number) => {
    onPageChange?.(page);
  };

  return (
    <div className="flex mt-[12px] mb-[20px] text-[#595858] font-medium flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-[12px]">
        Page {currentPage} of {totalPages}
      </div>

      <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-[#171717] sm:flex"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4 mr-1" color="#09090B" />
          Previous
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-[#171717] sm:hidden"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="h-4 w-4" color="#09090B" />
        </Button>

        <div className="flex items-center gap-1">
          <Button
            variant={"ghost"}
            size="sm"
            className={
              currentPage === 1 ? "text-[#09090B] border bg-white" : ""
            }
            onClick={() => handlePageChange(1)}
          >
            1
          </Button>
          <Button
            variant={"ghost"}
            size="sm"
            className={
              currentPage === 2
                ? "text-[#09090B] border bg-white"
                : "text-[#171717]"
            }
            onClick={() => handlePageChange(2)}
          >
            2
          </Button>
          <Button
            variant={"ghost"}
            size="sm"
            className={
              currentPage === 3
                ? "text-[#09090B] border bg-white"
                : "text-[#171717]"
            }
            onClick={() => handlePageChange(3)}
          >
            3
          </Button>
          <Button variant="ghost" size="sm" className="text-[#848484]">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="text-[#171717] hidden sm:flex"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="text-[#171717] sm:hidden"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
