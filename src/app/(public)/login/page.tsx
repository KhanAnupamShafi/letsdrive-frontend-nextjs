import AuthSection from '@/components/ui/Auth/AuthSection';
import LoginSVG from '../../../assets/login.svg';
const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-bg1 signup-section">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 lg:gap-8 mx-3">
          <AuthSection />
          <div className="col-span-2 lg:col-span-1">
            <LoginSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
