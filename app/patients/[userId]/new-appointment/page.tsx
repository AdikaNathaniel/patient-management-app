/* eslint-disable @next/next/no-async-client-component */
//'use client';

import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { LucideLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/app/lib/actions/patient.actions";



//async was to be added
export default  async function NewAppointment({ params : { userId }} : SearchParamProps) {
      const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">

        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={100} // Adjusted to more reasonable values
            width={200}
            alt="CarePulse logo"
            className="mb-12 h-10 w-fit"
          />
             
          < AppointmentForm
               type="create"
                userId = {userId} 
                patientId={patient.$id}      
          />      
            <p className="copyright mt-10 py-12">
              © 2024 CarePulse
            </p>    
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div> 
  );
}




