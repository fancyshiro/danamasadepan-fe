"use client";

import React from "react";
import { Tabs, Tab } from "@heroui/tabs";
import ListTransaksi from "@/components/elements/ListTransaksi";

const TabsAdmin = ({ id }: { id: string }) => {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-lg">
      <Tabs aria-label="Options">
        <Tab key="transaksi" title="Transaksi">
          <ListTransaksi id={id} />
        </Tab>
        <Tab key="change" title="Ganti Password" isDisabled/>
        <Tab key="informasiOther" title="Lainnnya" isDisabled/>
      </Tabs>
    </div>
  );
};

export default TabsAdmin;
