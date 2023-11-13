'use client';
import { Button, Col, Flex, Form, Input, Row, Select } from 'antd';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type FieldType = {
  searchTerm?: string;
  status?: string; // Add status property
};

const SearchFilter: React.FC = () => {
  const [selected, setSelected] = useState('all');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This useEffect runs when the selected value changes
    updateUrl({ status: selected });
  }, [selected]);

  const handleChangeSelect = (value: string) => {
    setSelected(value);
  };

  const updateUrl = (values: FieldType) => {
    const { searchTerm, status } = values;
    const query = new URLSearchParams();
    if (searchTerm) {
      query.set('searchTerm', searchTerm);
    } else {
      query.delete('searchTerm');
    }

    if (status && status !== 'all') {
      query.set('status', status);
    } else {
      query.delete('status');
    }

    router.push(`/admin/bookings?${query.toString()}`);
  };
  const onFinish = async (values: any) => {
    // const searchTerm = values.searchTerm || '';
    // router.push(`/admin/bookings?searchTerm=${searchTerm}`);
    updateUrl(values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Flex justify="space-between">
        <Form
          className="my-5 "
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Row>
            <Col span={20} className="">
              <Form.Item<FieldType>
                // label="Search"

                name="searchTerm"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your search term!',
                //   },
                // ]}
              >
                <Input allowClear addonBefore={<Search />} />
              </Form.Item>
            </Col>

            <Col span={4} className="">
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="status">
            <Select
              defaultValue={selected}
              style={{ width: '100%' }}
              onSelect={handleChangeSelect}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="PENDING">Pending</Select.Option>
              <Select.Option value="CANCELED">
                Cancelled
              </Select.Option>
              <Select.Option value="APPROVED">Approved</Select.Option>
            </Select>
          </Form.Item>
        </Form>
        <i></i>
      </Flex>
    </>
  );
};

export default SearchFilter;
