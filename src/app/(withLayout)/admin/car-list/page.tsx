import AntContents from '@/components/ui/Content/Content';
import MyTable from '@/components/ui/Table/AntTable';
import AdminTable from '@/components/view/Admin/AdminTable';
import CarManager from '@/components/view/Admin/CarManager';
import { getAllCars } from '@/services/car/fetchAllCars';
import { columns } from './columns.cars';

const CarManagementPage = async ({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) => {
  const data: any = await getAllCars(searchParams);
  console.log(data);
  return (
    <AntContents>
      <AdminTable title="All Cars">
        {/* <SearchFilter /> */}
        <CarManager />
        <MyTable columns={columns} data={data} />
      </AdminTable>
    </AntContents>
  );
};

export default CarManagementPage;
