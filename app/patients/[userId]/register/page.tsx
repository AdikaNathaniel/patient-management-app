/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/app/lib/actions/patient.actions'




const Register =  async ( { params : { userId }} : SearchParamProps) => {

  const user = await getUser(userId);

      return(
        <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <Image
              src="/assets/icons/logo-full.svg"
              height={100} // Adjusted to more reasonable values
              width={200}
              alt="CarePulse logo"
              className="mb-12 h-10 w-fit"
            />

            <RegisterForm  user = {user}/>
              <p className="copyright py-12">
                © 2024 CarePulse
              </p>         
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="Patient onboarding"
          className="side-img max-w-[390px]"
        />
      </div>
      )
}

export default Register

// 78901adikacpen2025_computer--twillo password
// Recovery Code- HMJ18RMJ8LNWXPFZ873DCY6J
