import Booking from '@/components/view/User/Booking';
import UserSidebar from '@/components/view/User/UserSidebar';
import { authOptions } from '@/lib/authOptions/AuthOptions';
import { getUserBookings } from '@/services/user/getUserBooking';
import { getServerSession } from 'next-auth';

const UserPage = async () => {
  const session = await getServerSession(authOptions);
  const data = await getUserBookings(session?.email);
  return (
    <div className="pb-[30px] lg:pb-[60px] pt-0 relative z-[1] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <UserSidebar />
          <Booking data={data} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
