import MyTable from '@/components/ui/Table/AntTable';
import AdminTable from '@/components/view/Admin/AdminTable';
import SearchFilter from '@/components/view/Admin/SearchFilter';
import { getAllBookings } from '@/services/booking/fetchAllBookings';
import { columns } from './cloumns.bookings';

const BookingManagementPage = async ({
  searchParams,
}: {
  searchParams: Record<string, unknown>;
}) => {
  const data: any = await getAllBookings(searchParams);
  return (
    <AdminTable title="All Bookings">
      <SearchFilter />
      <MyTable columns={columns} data={data} />
    </AdminTable>
  );
};

export default BookingManagementPage;
