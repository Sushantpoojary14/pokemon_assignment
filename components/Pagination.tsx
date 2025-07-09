"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function PaginationComponent({
    pageIndex,
    total,
    link
}: {
    pageIndex: number;
    total: number;
    link: string
}) {

    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage <= total) {
            router.push(`?page=${newPage}`)

        }
    };

    return (
        <>
            {total > 0 ? (
                <div className="flex items-center justify-between mt-4 min-h-12">
                    <button
                        onClick={() => handlePageChange(1)}
                        disabled={pageIndex === 1}
                        className="px-5 py-2 font-bold bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
                    >
                        {"<<"}
                    </button>
                    <button
                        onClick={() => handlePageChange(pageIndex - 1)}
                        disabled={pageIndex === 1}
                        className="px-5 py-2 font-bold bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 mx-2"
                    >
                        {"<"}
                    </button>
                    <span className="text-md font-bold">
                        {`${total ? pageIndex : 0} - ${total}`}
                    </span>
                    <button
                        onClick={() => handlePageChange(pageIndex + 1)}
                        disabled={pageIndex >= total}
                        className="px-5 py-2 font-bold bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 mx-2"
                    >
                        {">"}
                    </button>
                    <button
                        onClick={() => handlePageChange(total)}
                        disabled={pageIndex >= total}
                        className="px-5 py-2 font-bold bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300"
                    >
                        {">>"}
                    </button>
                </div>
            ) : null}
        </>
    );
}
