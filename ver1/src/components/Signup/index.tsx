import React, { useState } from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom'; 

interface IProps {
  className?: string;
}

const Signup: React.FC<IProps> = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const history = useHistory();
  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <section className={`signup flex flex-col bg-white overflow-hidden ${props.className || ''}`}>
      <div className="xs:mt-[46px] xs:mx-auto xs:mb-20 tn:mt-[46px] tn:mx-auto tn:mb-[50px] w-[85.76%] flex flex-col gap-y-[18px] max-w-[1234.9375px] mt-[46px] mx-auto mb-[104px]">
        <div className="tn:gap-x-2 w-[234px] flex gap-x-3 z-[1] max-w-[85%] ml-auto">
          <img className="w-10 object-cover" src={'/assets/70bee51749289912a11c3cd7287001ce.svg'} alt="Sign Language" />
          <p className="md:items-start mt-1 mb-[3px]">
            <span className="font-extrabold text-[26px] leading-[1.26] font-PlusJakartaSans text-black md:text-[24px] xxs:text-[22px]">
              <span className="font-extrabold text-[rgb(83,169,205)]">Sign</span>
              <span className="font-extrabold text-[rgb(30,30,47)]">Language</span>
            </span>
          </p>
        </div>

        <div className="md:flex-col md:items-center md:gap-y-[30px] flex justify-between gap-x-2.5">
          <img
            className="md:w-full md:min-w-[unset] md:max-w-[486px] w-[486px] object-cover z-[1] min-w-0"
            src={'/assets/baefeaee9c8b144c0b7fa1ec44fe85d5.png'}
            alt="Signup illustration"
          />

          <div className="md:w-full md:min-w-[unset] md:m-0 w-[640px] flex flex-col items-center min-w-0 mt-[42px] mb-5">
            <p className="md:text-[36px] md:items-start xxs:text-[32px] font-bold text-[40px] leading-tight font-PlusJakartaSans text-[rgba(49,49,49,0.878)] w-full">
              Sign up
            </p>
            <p className="font-normal text-[16px] leading-tight font-PlusJakartaSans text-[rgb(49,49,49)] w-full opacity-[0.75] mt-4">
              Let’s get you all set up so you can access your personal account.
            </p>

            <form className="w-full flex flex-col gap-y-6 mt-12" onSubmit={handleSubmit}>
              {/* User information input form group */}
              <div className="xs:gap-x-4 xxs:grid-cols-[repeat(1,_minmax(0,_1fr))] grid grid-cols-[repeat(2,_minmax(0,_1fr))] content-start gap-y-6 gap-x-6">
                {/* Input Fields */}
                {[
                  { label: 'First Name', name: 'firstName', type: 'text' },
                  { label: 'Last Name', name: 'lastName', type: 'text' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Phone Number', name: 'phoneNumber', type: 'tel' },
                  { label: 'Password', name: 'password', type: 'password' },
                  { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
                ].map(({ label, name, type }) => (
                  <div key={name} className="flex flex-col relative row-span-1 column-span-1">
                    <input
                      className="bg-white rounded outline outline-[rgb(121,116,126)] outline-1 outline-offset-[-1px] relative min-h-[56px] px-3"
                      type={type}
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={label}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="w-full flex gap-x-2 mt-6">
                <img className="w-6 object-cover" src={'/assets/525d0c0c6632a39f58c993f9839ebab6.svg'} alt="Privacy Policy" />
                <div className="my-[3px]">
                  <span className="font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-black">
                    <span className="text-[rgb(48,48,48)]">I agree to all the </span>
                    <span className="text-[rgb(255,134,130)]">Terms</span>
                    <span className="text-[rgb(48,48,48)]"> and </span>
                    <span className="text-[rgb(255,134,130)]">Privacy Policies</span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="flex justify-center font-bold text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(243,243,243)] text-center bg-[rgb(30,30,47)] rounded w-[640px] pt-[15px] pr-2 pb-[15px] pl-2 max-w-full mt-10"
              >
                Create account
              </button>
              <p className="flex justify-center mt-4">
                <span className="font-bold text-[14px] leading-[1.28] font-PlusJakartaSans text-black text-center">
                  <span className="font-bold text-[rgb(48,48,48)]">Already have an account? </span>
                  <span className="font-bold text-[rgb(255,134,130)] cursor-pointer"
                    onClick={handleLoginClick}
                    >Login</span>
                </span>
              </p>
            </form>

            <div className="sm:flex-col sm:items-center sm:gap-y-[30px] flex gap-x-4 mt-10">
              <hr
                className="sm:w-full sm:m-0 bg-[rgb(49,49,49)] w-[199px] h-px opacity-[0.25] min-h-[1px] mt-[9px] mb-2"
              />
              <div className="sm:w-full font-normal text-[14px] leading-[1.28] font-PlusJakartaSans text-[rgb(49,49,49)] opacity-[0.5]">
                Or Sign up with
                </div>
              <hr
                className="sm:w-full sm:m-0 bg-[rgb(49,49,49)] w-[198px] h-px opacity-[0.25] min-h-[1px] mt-[9px] mb-2"
              />
            </div>

            <div className="xxs:flex-col xxs:items-center xxs:gap-y-[30px] w-full flex gap-x-4 mt-10">
              {/* Social media login options */}
              <img
                className="xxs:w-full xxs:min-w-[unset] xxs:max-w-[203px] rounded outline outline-[rgb(81,93,239)] outline-1 outline-offset-[-1px] w-[203px] object-cover min-w-0"
                src={'/assets/de9f3005456292fe90e42f79e20e10dc.svg'}
                alt="alt text"
              />
              <img
                className="xxs:w-full xxs:min-w-[unset] xxs:max-w-[202px] rounded outline outline-[rgb(81,93,239)] outline-1 outline-offset-[-1px] w-[202px] object-cover min-w-0"
                src={'/assets/1e58727831e4d8eac8c2399d37191fbc.svg'}
                alt="alt text"
              />
              <img
                className="xxs:w-full xxs:min-w-[unset] xxs:max-w-[203px] rounded outline outline-[rgb(81,93,239)] outline-1 outline-offset-[-1px] w-[203px] object-cover min-w-0"
                src={'/assets/28d74fcb9395a994ef47ddfa4d563aeb.svg'}
                alt="alt text"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
