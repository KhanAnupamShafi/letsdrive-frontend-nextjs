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
  let loading = true; // Initialize loading as true

  try {
    // Fetch data
    const response = await getAllCars(searchParams);

    // Data has been successfully fetched
    loading = false; // Set loading to false

    // Return the UI
    return (
      <AntContents>
        <AdminTable title="All Cars">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <CarManager />
              <MyTable columns={columns} data={response?.data} />
            </>
          )}
        </AdminTable>
      </AntContents>
    );
  } catch (error) {
    console.error('Error fetching data:', error);

    // Handle the error if needed
    return (
      <AntContents>
        <div>Error fetching data.</div>
      </AntContents>
    );
  }
};

export default CarManagementPage;
