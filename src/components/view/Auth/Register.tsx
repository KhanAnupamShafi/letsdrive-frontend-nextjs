import { registerSchema } from '@/shared/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
interface RegisterProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const Register: React.FC<RegisterProps> = ({ setCurrentView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const onSubmitHandler = (data: Record<string, unknown>) => {
    // console.log({ data });
    reset();
  };
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h3 className="mb-4 h3"> Let’s Get Started! </h3>
        <p className="mb-10">
          Please enter your email address to join us
        </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="first-name"
              className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
              First Name
            </label>
            <input
              {...register('firstName')}
              className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
              placeholder="Enter First Name"
              id="first-name"
              type="text"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <label
              htmlFor="last-name"
              className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
              Last Name
            </label>
            <input
              {...register('lastName')}
              className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
              placeholder="Enter Last Name"
              id="last-name"
              type="text"
            />
          </div>
          <div className="col-span-12">
            <label
              htmlFor="enter-email"
              className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
              Enter Your Email ID
            </label>
            <input
              {...register('email')}
              className={`w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 ${
                errors.email && 'border-solid border-red-500'
              }`}
              placeholder="Enter Your Email"
              id="enter-email"
              type="text"
            />
            <p className="text-xs text-orange-900 px-5">
              {errors.email?.message}
            </p>
          </div>
          <div className="col-span-12">
            <label
              htmlFor="enter-password"
              className="text-base sm:text-lg md:text-xl font-normal sm:font-medium block mb-3">
              Enter Your Password
            </label>
            <input
              {...register('password')}
              className={`w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 ${
                errors.password && 'border-solid border-red-500'
              }`}
              placeholder="Enter Your Password"
              id="enter-password"
              type="text"
            />
            <p className="text-xs text-orange-900 px-5">
              {errors.password?.message}
            </p>
          </div>
          <div
            className="col-span-12"
            onClick={() => setCurrentView('signin')}>
            <p className="mb-0">
              Do you have an account?
              <Button size="small" type="text" color="#f0ad4e">
                <span className="link font-semibold text-primary">
                  Signin
                </span>
              </Button>
            </p>
          </div>
          <div className="col-span-12">
            <button
              type="submit"
              className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
              <span className="inline-block"> Signup </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
