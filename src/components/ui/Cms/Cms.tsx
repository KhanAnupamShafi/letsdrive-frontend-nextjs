// 'use client';
// import { getAllCategoryNames } from '@/services/cms/fetchCmsCategories';
import { Tabs } from 'antd';
// import { useEffect, useState } from 'react';
import { getAllCategoryNames } from '@/services/cms/fetchCmsCategories';
import SingleCategoryContents from './SingleCategoryContents';

type CategoryType = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

const ContentTab = async () => {
  const res = await getAllCategoryNames();
  console.log(res);
  // const [categoryNames, setCategoryNames] = useState([]);
  // useEffect(() => {
  //   const fetchCategoryNames = async () => {
  //     try {
  //       const res = await getAllCategoryNames();
  //       setCategoryNames(res);
  //     } catch (error) {
  //       console.error('Error fetching service names:', error);
  //     }
  //   };

  //   fetchCategoryNames();
  // }, []);

  return (
    <div>
      <Tabs
        defaultActiveKey="2"
        items={res?.map((category: CategoryType) => {
          return {
            label: (
              <span className="text-lg font-sans" key={category.id}>
                {/* <Icon /> */}
                {category?.name}
              </span>
            ),
            key: category?.id,
            children: <SingleCategoryContents id={category?.id} />,
          };
        })}
      />
    </div>
  );
};

export default ContentTab;
