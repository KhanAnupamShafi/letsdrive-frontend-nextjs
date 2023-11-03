'use client';
import CreateCarParentModal from '@/components/ui/Car/CarParent';
import { Flex, Space } from 'antd';
import Search from 'antd/es/input/Search';
import { PlusCircleIcon } from 'lucide-react';
import { useState } from 'react';

const CarManager = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Flex className="m-auto mt-10" justify="center" align="center">
        <Space>
          <Search
            className="m-auto"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            // onSearch={onSearch}
          />
        </Space>
      </Flex>
      <div className="grid grid-cols-12 gap-1 lg:gap-2 z-[1] relative">
        <div className="bg-white border col-span-12 rounded-2xl p-3 md:p-5 lg:pb-8 lg:px-10">
          <div
            className="flex gap-3  border-t border-dashed  flex-wrap pt-4 lg:pt-6"
            role="tablist"
            aria-orientation="horizontal">
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl cursor-pointer py-2 md:py-3 px-3 md:px-4 inline-flex items-center gap-2 text-primary bg-primary text-white hover:bg-blue-600 transition-colors"
              type="button">
              <PlusCircleIcon />
              Add New Listing
            </button>
          </div>
        </div>
      </div>
      <CreateCarParentModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CarManager;
