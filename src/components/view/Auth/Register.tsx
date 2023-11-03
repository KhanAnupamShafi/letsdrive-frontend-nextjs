'use client';
import Loader from '@/app/loading';
import { baseUrl } from '@/app/page';
import { registerSchema } from '@/shared/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, message } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const onSubmitHandler = async (data: Record<string, unknown>) => {
    setLoading(true);

    let payload = {
      fullName: data.firstName + ' ' + data.lastName,
      email: data.email,
      phoneNumber: '12345@12345',
      password: data.password,
      role: 'user',
      address: '',
      isPasswordReset: false,
    };
    try {
      // create or update user based on user prop

      const res = await fetch(`${baseUrl}/users/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-cache',
      });
      const response = await res.json();
      if (response.success === true) {
        messageApi.success({
          content: 'Signup successful',
          duration: 4,
          key: 'updatable',
        });

        const loginData = {
          email: data.email,
          password: data.password,
        };

        try {
          const loginResult = await signIn('ld-next-auth', {
            email: loginData.email,
            password: loginData.password,
            redirect: false,
          });

          if (loginResult?.ok && !loginResult.error) {
            messageApi.success('Login successful', 2.5);
            router.push('/');
          } else {
            messageApi.error(
              'Login failed: ' + loginResult?.error,
              2.5
            );
          }
        } catch (error) {
          messageApi.error('An error occurred: ' + error, 2.5);
        }

        reset(); // Close the modal on successful submission
      } else {
        // Handle any errors
        messageApi.error({
          content: response?.message,
          duration: 5,
          key: 'updatable',
        });
      }
      reset();

      // redirect to user list with success message
      // router.push('/users');
      // alertService.success(message, true);
    } catch (error: any) {
      // alertService.error(error);
    } finally {
      setLoading(false); // Set loading back to false after the process completes
    }

    reset();
  };
  return (
    <>
      {contextHolder}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Register;
