import AuthSection from '@/components/ui/Auth/AuthSection';

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-1)] signup-section">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 lg:gap-8 mx-3">
          <AuthSection />
          <div className="col-span-2 lg:col-span-1">
            <img
              alt=""
              loading="lazy"
              width={667}
              height={639}
              decoding="async"
              data-nimg={1}
              className="w-full 3xl:translate-x-20"
              srcSet="https://placewisetw.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadmin-signin.0bebd2c6.png&w=750&q=75  1x,https://placewisetw.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadmin-signin.0bebd2c6.png&w=1920&q=75  2x"
              src="https://placewisetw.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadmin-signin.0bebd2c6.png&w=1920&q=75"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
