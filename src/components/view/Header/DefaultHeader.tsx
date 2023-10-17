import Navbar from '@/components/ui/Navbar/Navbar';
import TopHeader from '@/components/ui/TopHeader/TopHeader';
import { authOptions } from '@/lib/authOptions/AuthOptions';
import { getServerSession } from 'next-auth';

const DefaultHeader = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <TopHeader session={session ? true : false} />
      <Navbar />
    </>
  );
};

export default DefaultHeader;
