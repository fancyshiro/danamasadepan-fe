"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/tabs";
import ListTransaksi from "@/components/elements/ListTransaksi";

const TabsAdmin = ({ id }: { id: string }) => {
  return (
    <div className="bg-white dark:bg-neutral-900/70 p-4 rounded-xl border shadow-md">
      <Tabs aria-label="Options">
        <Tab key="transaksi" title="Transaksi">
          <ListTransaksi id={id} role="admin" />
        </Tab>
        <Tab key="change" title="Ganti Password" isDisabled/>
        <Tab key="informasiOther" title="Lainnnya" isDisabled/>
      </Tabs>
    </div>
  );
};

export default TabsAdmin;
