import { formattedDate } from '@/lib/utils/FormatedDate';
import { Icons } from '@/static/Icons';
import { Card, CardBody, Chip } from '@heroui/react';
import React from 'react'

type TTransaction = {
  id: number;
  student?: {
    name?: string;
    balance?: number;
    class?: string;
    major?: string;
  };
  admin?: {
    name?: string;
    role?: string;
  };
  type?: "debit" | "kredit";
  amount?: number;
  created_at?: string;
};

const CardTransaction = (props: TTransaction) => {
  return (
    <Card isPressable >
    <CardBody className="p-4">
      <div className="flex xl:items-center gap-4 flex-col xl:flex-row">
        {/* Transaction Icon */}
        <div className={`p-2 rounded-full w-max ${ props.type === "debit" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}>
          {props?.type === "debit" ? Icons.ArrowUp : Icons.ArrowDown}
        </div>

        {/* Transaction Details */}
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-lg line-clamp-3 dark:text-white text-black">
                {props.student?.name}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{props.student?.class}</span>
                <span>•</span>
                <span>{props.student?.major}</span>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold text-lg ${ props.type === "debit" ? "text-success dark:text-success" : "text-danger dark:text-danger"}`}>
                {props?.amount}
              </p>
              <Chip
                size="sm"
                variant="flat"
                color={props.type === "debit" ? "success" : "danger"}
                className="mt-1"
              >
                {props?.type}
              </Chip>
            </div>
          </div>

          {/* Date */}
          <div className="border-t pt-2 flex items-center gap-1 mt-2 text-sm text-gray-500">
            {Icons.date}
            <span>{formattedDate(props.created_at)}</span>
          </div>
        </div>
      </div>
    </CardBody>
  </Card>
  )
}

export default CardTransaction