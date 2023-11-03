import { createCarPackage } from '@/services/car/createCar';
import { message } from 'antd';
import CarModal from '../Modal/CarModal';

type ModalCarProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const CreateCarParentModal = ({ open, setOpen }: ModalCarProps) => {
  const handleOk = async (data: any) => {
    try {
      const response = await createCarPackage(data);

      // Handle success
      if (response.success === true) {
        message.success({
          content: 'Car data posted successfully',
          duration: 4,
          key: 'updatable',
        });
      } else {
        message.error({
          content: response?.message,
          duration: 5,
          key: 'updatable',
        });
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <CarModal
      open={open}
      setOpen={setOpen}
      createCarPackage={handleOk}
    />
  );
};

export default CreateCarParentModal;
