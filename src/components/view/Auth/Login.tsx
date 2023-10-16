import { Button } from 'antd';

interface RegisterProps {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}
const Login: React.FC<RegisterProps> = ({ setCurrentView }) => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
      <form action="#">
        <h3 className="mb-4 h3"> Welcome Back! </h3>
        <p className="mb-10"> Sign in to your account and join us </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <label
              htmlFor="enter-email"
              className="text-base sm:text-lg md:text-xl font-medium block mb-3">
              Enter Your Email ID
            </label>
            <input
              className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5"
              placeholder="Enter Your Email"
              id="enter-email"
              type="text"
            />
          </div>
          <div className="col-span-12">
            <label
              htmlFor="enter-password"
              className="text-base sm:text-lg md:text-xl font-medium block mb-3">
              Enter Your Password
            </label>
            <input
              className="w-full bg-[var(--bg-1)] border focus:outline-none rounded-full py-3 px-5 mb-3"
              placeholder="Enter Your Password"
              id="enter-password"
              type="text"
            />
            <a
              className="link block text-sm text-primary :clr-primary-400 text-end"
              href="signup">
              Forget password
            </a>
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
            <a
              className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
              href="#">
              <span className="inline-block"> Signin </span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
