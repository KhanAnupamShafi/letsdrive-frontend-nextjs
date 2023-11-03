'use client';
import { fetchCarById } from '@/services/car/fetchCarById';
import { getAllServiceNames } from '@/services/car/fetchCarServiceName';
import { updateCarPackage } from '@/services/car/updateCarPackage';
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from 'antd';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CarUpdate = () => {
  const [form] = Form.useForm();
  const [serviceNames, setServiceNames] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const { carId: carToUpdate } = useParams();
  const router = useRouter();
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const carData = await fetchCarById(carToUpdate as string); // Use the server action to fetch car data by ID
        const options = [];
        if (carData?.data?.wifi) {
          options.push('wifi');
        }
        if (carData?.data?.airConditioner) {
          options.push('airConditioner');
        }
        if (carData?.data?.transmission) {
          options.push('transmission');
        }
        console.log(options);
        form.setFieldsValue({
          name: carData?.data?.name,
          carDesc: carData?.data?.description,
          model: carData?.data?.model,
          fuel: carData?.data?.fuel,
          imageUrl: carData?.data?.image,
          seatCapacity: carData?.data?.seatCapacity,
          luggage: carData?.data?.luggage,
          service: carData?.data?.service?.id,
          options: options,

          // Set other form fields based on the carData
        });
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    if (carToUpdate) {
      fetchCarData();
    }
  }, [carToUpdate, form]);

  const handleOk = async () => {
    try {
      messageApi.open({
        key: 'updatable',
        type: 'loading',
        content: 'Updating...',
      });

      const values = await form.validateFields();
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
      //call parent where server action occuers
      const response = await updateCarPackage(carToUpdate, data);

      // Handle success
      if (response.success === true) {
        message.success({
          content: 'Car data updated successfully',
          duration: 4,
          key: 'updatable',
        });
        router.push('/admin/car-list');
      } else {
        message.error({
          content: response?.message,
          duration: 5,
          key: 'updatable',
        });
      }
    } catch (error) {}
  };
  const { Option } = Select;

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

  const onReset = () => {
    form.resetFields();
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <>
      {contextHolder}
      <Form
        {...layout}
        form={form}
        layout="horizontal"
        onFinish={handleOk}>
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
        <Form.Item label="Seat Total (Optional)" name="seatCapacity">
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Link href={'/admin/car-list'} onClick={onReset}>
            <Button type="default" htmlType="submit">
              Go Back
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default CarUpdate;
