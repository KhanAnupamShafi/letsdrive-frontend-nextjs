'use client';
import { getAllServiceNames } from '@/services/car/fetchCarServiceName';
import {
  Checkbox,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  message,
} from 'antd';
import { useEffect, useState } from 'react';

type ModalCarProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  createCarPackage: (data: any) => Promise<any>;
};

const { Option } = Select;

const CarModal = ({
  open,
  setOpen,
  createCarPackage,
}: ModalCarProps) => {
  const [form] = Form.useForm();
  const [serviceNames, setServiceNames] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchServiceNames = async () => {
      try {
        const res = await getAllServiceNames();
        setServiceNames(res);
      } catch (error) {
        console.error('Error fetching service names:', error);
      }
    };

    fetchServiceNames();
  }, []);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      // Convert the selected options into properties with true values
      const selectedOptions: any = {
        wifi: false,
        airConditioner: false,
        transmission: false,
      };
      if (values.options && values.options.length > 0) {
        values.options.forEach((option: any) => {
          selectedOptions[option] = true;
        });
      }

      const data = {
        name: values?.name,
        description: values.carDesc || '',
        model: values.model || '',
        fuel: values.fuel || '',
        image: values.imageUrl || '',
        seatCapacity: values.seatCapacity || 1,
        luggage: values.luggage || 1,
        priceStart: Number(
          (Math.floor(Math.random() * 100) + 50).toFixed()
        ),
        serviceId: values?.service,
        bookedUntil: '',
        ...selectedOptions,
      };

      await createCarPackage(data);

      messageApi.open({
        key: 'updatable',
        type: 'loading',
        content: 'Loading...',
      });
      form.resetFields();
    } catch (error) {
      console.error('Validation failed:', error);
    }

    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {' '}
      {contextHolder}
      <Modal
        title=""
        centered
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        okText="Save Changes">
        <Form form={form} layout="vertical" onFinish={handleOk}>
          <Form.Item
            label="Car name"
            name="name"
            rules={[{ required: true }]}>
            <Input placeholder="Enter name" />
          </Form.Item>
          <Form.Item
            name="service"
            label="Car services"
            rules={[{ required: true }]}>
            <Select placeholder="Select a service" allowClear>
              {serviceNames.map((service: any) => (
                <Option key={service.id} value={service.id}>
                  {service.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Model" name="model">
            <Input placeholder="Enter model" />
          </Form.Item>
          <Form.Item label="Description" name="carDesc">
            <Input placeholder="Enter description" />
          </Form.Item>
          <Form.Item label="Fuel (Optional)" name="fuel">
            <Input placeholder="Enter fuel information" />
          </Form.Item>
          <Form.Item
            label="Seat Total (Optional)"
            name="seatCapacity">
            <InputNumber min={1} max={100} defaultValue={1} />
          </Form.Item>
          <Form.Item label="Luggage (Optional)" name="luggage">
            <InputNumber min={1} max={100} defaultValue={1} />
          </Form.Item>
          <Form.Item label="Options" name="options">
            <Checkbox.Group
              options={['wifi', 'transmission', 'airConditioner']}
            />
          </Form.Item>
          <Form.Item label="Image URL" name="imageUrl">
            <Input placeholder="Enter URL" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CarModal;
