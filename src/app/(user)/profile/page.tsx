import Booking from '@/components/view/User/Booking';
import UserSidebar from '@/components/view/User/UserSidebar';

const UserPage = () => {
  return (
    <div className="pb-[30px] lg:pb-[60px] pt-0 relative z-[1] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <UserSidebar />
          <Booking />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
