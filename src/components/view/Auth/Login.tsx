import { loginSchema } from '@/shared/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, message } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface RegisterProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}
const Login: React.FC<RegisterProps> = ({ setCurrentView }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmitHandler = async (data: Record<string, unknown>) => {
    const { email, password } = data;

    try {
      const result = await signIn('ld-next-auth', {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: '/',
      });

      if (result?.ok && !result.error) {
        message.success('Login successful', 2.5);
        router.push('/');
        reset();
      } else {
        message.error('Login failed: ' + result?.error, 2.5);
      }
    } catch (error) {
      message.error('An error occurred: ' + error, 2.5);
    }
  };
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h3 className="mb-4 h3"> Welcome Back! </h3>
        <p className="mb-10"> Sign in to your account and join us </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <label
              htmlFor="enter-email"
              className="text-base sm:text-lg md:text-xl font-medium block mb-3">
              Enter Your Email ID (admin@test.com)
            </label>
            <input
              {...register('email')}
              className={`w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 ${
                errors.email
                  ? 'border-solid border-red-500'
                  : 'border-none'
              } `}
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
              Enter Your Password (123456)
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
            onClick={() => setCurrentView('register')}>
            <p className="mb-0">
              Don&apos;t have an account?{' '}
              <Button size="small" type="text" color="#f0ad4e">
                <span className="link font-semibold text-primary">
                  Signup
                </span>
              </Button>
            </p>
          </div>
          <div className="col-span-12">
            <button
              type="submit"
              className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold">
              <span className="inline-block"> Sign in </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
