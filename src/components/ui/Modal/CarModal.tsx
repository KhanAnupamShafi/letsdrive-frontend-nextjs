'use client';
import { baseUrl } from '@/app/page';
import { getAllServiceNames } from '@/services/car/fetchCarServiceName';
import {
  Button,
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
};

const { Option } = Select;

const CarModal = ({ open, setOpen }: ModalCarProps) => {
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
      console.log(values);
      // Convert the selected options into properties with true values
      const selectedOptions: Record<string, unknown> = {
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
        priceStart: Math.floor(Math.random() * 100) + 50,
        serviceId: values?.service,
        bookedUntil: '',
        ...selectedOptions,
      };

      try {
        const res = await fetch(`${baseUrl}/car-packages/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          cache: 'no-cache',
        });
        const response = await res.json();
        messageApi.open({
          key: 'updatable',
          type: 'loading',
          content: 'Loading...',
        });
        console.log(response);
        if (response.success === true) {
          messageApi.success({
            content: 'Car data posted successfully',
            duration: 4,
            key: 'updatable',
          });

          setOpen(false); // Close the modal on successful submission
        } else {
          // Handle any errors
          messageApi.error({
            content: response?.message,
            duration: 5,
            key: 'updatable',
          });
        }
        setOpen(false); // Close the modal on successful submission
      } catch (error) {
        messageApi.error('Failed to request car data post');
      }

      setOpen(false);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onSelectChange = (value: any) => {
    console.log(value);
    // Update the selected options when the checkboxes change
  };

  return (
    <>
      {' '}
      {contextHolder}
      <Modal
        title="Modal 1000px width"
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
            <Select
              placeholder="Select a service"
              onChange={onSelectChange}
              allowClear>
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
            <Button type="default" onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CarModal;
