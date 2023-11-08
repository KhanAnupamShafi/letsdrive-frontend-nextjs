'use client';

import UploadImage from '@/components/ui/Upload/UploadingImg';
import { createContent } from '@/services/cms/createContent';
import { getAllCategoryNames } from '@/services/cms/fetchCmsCategories';
import { updateContentById } from '@/services/cms/updateContentById';
import { UpCircleOutlined } from '@ant-design/icons';

import {
  Button,
  Col,
  ColorPicker,
  Flex,
  FloatButton,
  Form,
  Input,
  Radio,
  Space,
  Switch,
  message,
} from 'antd';
import { useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  // Set this to `false` so it is only loaded on the client.
  ssr: false,
  // You can also add an indicator while the component is loading.
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

export default function HomeEditor({ mode }: { mode: string }) {
  const [messageApi, contextHolder] = message.useMessage();
  const { contentId } = useParams();
  const [categoryNames, setCategoryNames] = useState([]);
  const { data: session } = useSession();

  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchCategoryNames = async () => {
      try {
        const res = await getAllCategoryNames();
        setCategoryNames(res);
      } catch (error) {
        console.error('Error fetching service names:', error);
      }
    };

    fetchCategoryNames();
  }, []);

  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = async (values: any) => {
    messageApi.open({
      key: 'updatable',
      type: 'loading',
      content: 'Creation in progress...',
    });
    const formData = new FormData();
    const data = form.getFieldsValue();
    data.file.forEach((file: any, index: string) => {
      formData.append(`file${index}`, file.originFileObj as Blob);
    });

    // formData.forEach((file: any, index: string) => {
    //   console.log(file);
    // });

    const requestObj = {
      title: data.title,
      content: content,
      isFeatured: data.featured,
      isPublished: data.published,
      isDraft: !data.published,
      theme: data.theme === undefined ? '' : data.theme.toHexString(),
      tags: [],
      adminId: session?.id,
      categoryId: data.category,
    };
    if (mode === 'create') {
      const response = await createContent(requestObj, formData);
      // Handle success
      if (response.success === true) {
        message.success({
          content: 'Content posted successfully',
          duration: 4,
          key: 'updatable',
        });
        router.push('/admin/manage-contents');
      } else {
        message.error({
          content: response?.message,
          duration: 5,
          key: 'updatable',
        });
      }
    } else if (mode === 'update') {
      const response = await updateContentById(
        contentId,
        requestObj,
        formData
      );
      // Handle success
      if (response.success === true) {
        message.success({
          content: 'Content updated successfully',
          duration: 4,
          key: 'updatable',
        });
        router.push('/admin/manage-contents');
      } else {
        message.error({
          content: response?.message,
          duration: 5,
          key: 'updatable',
        });
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: 'Please Enter a title!' },
          ]}>
          <Input placeholder="Enter a title" />
        </Form.Item>

        <Flex
          gap={50}
          justify="center"
          className="lg:flex-row flex-col justify-center">
          <Form.Item
            label="Content Type"
            name="category"
            rules={[
              { required: true, message: 'Please pick an category!' },
            ]}>
            <Radio.Group>
              {categoryNames?.map((ctg: any) => (
                <Radio.Button key={ctg.id} value={ctg.id}>
                  {' '}
                  {ctg.name}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Form.Item>

          <div className="flex flex-col gap-1">
            <Form.Item
              name="featured"
              label="Featured Content"
              valuePropName="checked"
              initialValue={true}>
              <Switch checkedChildren="Yes" unCheckedChildren="No" />
            </Form.Item>
            <Form.Item
              name="published"
              label="Publish Now ?"
              valuePropName="checked"
              initialValue={true}>
              <Switch checkedChildren="Yes" unCheckedChildren="No" />
            </Form.Item>
          </div>

          <Form.Item name="theme" label="Theme Color">
            <ColorPicker showText />
          </Form.Item>
        </Flex>
        <Col span={8} style={{ margin: '10px 0' }}>
          <UploadImage />
        </Col>

        <QuillNoSSRWrapper
          modules={modules}
          onChange={setContent}
          theme="snow"
        />
        <Form.Item
          className="mt-10"
          wrapperCol={{ span: 12, offset: 6 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="reset">reset</Button>
          </Space>
        </Form.Item>
        <p>{content}</p>
        <FloatButton.BackTop icon={<UpCircleOutlined />} />
      </Form>
    </>
  );
}
