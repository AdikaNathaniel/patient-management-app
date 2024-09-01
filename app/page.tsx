import PatientForm from "@/components/forms/PatientForm"
import { Button } from "@/components/ui/button";
import { LucideLink } from "lucide-react"; // Changed to LucideLink to avoid confusion
import Link from "next/link"; // Corrected import for Next.js Link
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* OTP Verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={100} // Adjusted to more reasonable values
            width={200}
            alt="CarePulse logo"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePulse
            </p>
            {/* Admin link */}
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="Patient onboarding"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};




/*
Building a healthcare platform that streamlines patient registration, appointment scheduling, and medical records, and learn to implement complex forms and SMS notifications.
*/