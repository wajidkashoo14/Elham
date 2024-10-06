import { ImLocation2 } from "react-icons/im";
import {
  FaPhoneAlt,
  FaMobile,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactRoute() {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-4">Get In Touch</h1>
      <div className="py-16 flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <ImLocation2 />
            Baghwan pora lal bazar Srinagar j and k
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt />
            +91 9596103894
          </div>
          <div className="flex items-center gap-3">
            <FaMobile />
            +91 9596103894
          </div>
          <div className="flex items-center gap-3 my-4">
            <Link href="/">
              <FaFacebook size={25} className="text-[#213869] cursor-pointer" />
            </Link>

            <Link href="/">
              <FaInstagram
                size={25}
                className="text-[#213869] cursor-pointer"
              />
            </Link>

            <Link href="/">
              <FaLinkedin size={25} className="text-[#213869] cursor-pointer" />
            </Link>

            <Link href="/">
              <FaPinterest
                size={25}
                className="text-[#213869] cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62223.22238331971!2d77.63097291599122!3d12.910845268870474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728233645030!5m2!1sen!2sin" className="h-[240px] w-[450px]"></iframe>
          </div>
          
        </div>
        <div className="flex flex-col gap-4 w-1/2">
            <h2 className="font-medium">Leave us a message</h2>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Type your message here" className="h-[180px]" />
            <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}
