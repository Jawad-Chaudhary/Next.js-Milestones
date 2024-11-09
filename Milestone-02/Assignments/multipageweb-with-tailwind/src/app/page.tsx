"use client"
import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <main className=" scroll-smooth focus:scroll-auto">

      <section  className="md:pt-20 pt-16 w-full bg-[#eafaf1] h-auto pb-14 md:h-[550px]">
        <div className="px-4 md:px-20 animate-fadeInUp">
          <div className="text-2xl md:text-4xl font-extrabold md:w-[500px] w-full">Yes, your business can survive that expense.</div>
          <div className="mt-5 text-[14px] md:text-[16px] tracking-wider md:w-[620px] w-full leading-6 md:leading-7">
            Do you know how much money you&apos;ll have in two weeks? Two months? Two years? Business owners who use Pulse have better cash flow habits and a firm grasp on the pulse of their business. 
            <b>First month free.</b>
          </div>
          <button className="mt-8 text-center text-lg md:text-2xl font-bold text-white bg-[#3ba0f2] px-5 py-3 md:px-7 md:py-5 shadow-lg transition-all ease-in-out delay-100 duration-[0.25s] hover:-translate-y-[6px] hover:drop-shadow-md shadow-blue-400">
            Try 30 Days Free
          </button>
        </div>
      </section>


      <section  className="mt-[200px] flex flex-col items-center">

        <div data-aos="zoom-in" className="flex flex-col items-center w-full md:w-[800px] px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-center">Business owners trust Pulse.</h2>
          <p className="mt-6 text-[16px] md:text-[18px] text-gray-400 text-center">Below are real quotes from business owners.</p>
        </div>

        <section className="flex flex-col items-center justify-center w-full md:w-[450px] px-4">

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“I like that it provides the opportunity to test scenarios.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">You can quickly toggle income and expenses off and on to see what happens based on different scenarios to see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you&apos;re empowered to make smarter business decisions.</p>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“Pulse shows me how to track cash flow the right way.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">Stop stumbling your way through spreadsheets not knowing what you don&apos;t know. Pulse shows you a simple, easy-to-understand chart that answers the questions you have about your cash flow.</p>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“It&apos;s easy to set up and understand.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">Our user-friendly design makes Pulse a breeze to set up and manage your cash flow. It&apos;s so easy that over half of our customers are able to use Pulse every day without it taking up too much of their time.</p>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“It used to take us hours to manually do in Excel what Pulse does out of the box.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">If you&apos;re trying to manage your cash flow in systems that aren&apos;t specifically designed for that purpose, you&apos;re wasting the one resource more valuable than your cash—your time.</p>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“I like the simplicity.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">Pulse is meant to do one thing really well—cash flow management. No other product on the market is as focused on putting you in control of how cash moves in and out of your business.</p>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“I like that Pulse is web-based.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">You can access Pulse from any computer, any time. There&apos;s no software to install.</p>
          </div>

          <div data-aos="fade-up" className="flex flex-col items-center mt-14 text-center">
            <h2 className="font-extrabold text-md md:text-lg">“I can connect it to my accounting software.”</h2>
            <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">With our direct connection to QuickBooks Online, keeping your cash flow projections and your actual performance in sync is a breeze.</p>
          </div>

        </section>
      </section>


      <section className="mt-32 border-t-gray-200 border-t-[3px] h-auto py-6 md:py-16 flex flex-col md:flex-row justify-evenly items-center px-2 md:px-5 space-y-10 md:space-y-0">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-full md:w-[600px] text-center md:text-left">
          <h3 className="text-2xl md:text-4xl leading-[30px] md:leading-[45px] font-extrabold">
            Make smarter business decisions with Pulse.
          </h3>
          <p className="text-[16px] md:text-[18px] text-gray-600 mt-2 leading-6 md:leading-7">
            Do you know if you can hire another employee or take some money out of the company? Should you take on that new project or should turn it down? With Pulse, you immediately see how business decisions will impact your cash in the future, which in turn gives you the confidence you need to know if the decision is right.
          </p>
        </div>

        <div data-aos="flip-right" data-aos-duration="1000" className="w-full md:w-[400px] bg-white border-solid border-gray-200 border-2 flex flex-col items-center p-6 md:p-10 animate-pulse">
          <Image src="/images/avatar.png" alt="avatar-profile" width={80} height={80} />
          <div className="mt-5 text-lg md:text-2xl text-center text-[#00ad6a]">
            “Pulse makes my business smarter. We make better decisions because we can see further. You could say it has lowered our stress level by removing the fear of not knowing.”
          </div>
          <div className="text-[12px] tracking-widest mt-5 font-extrabold text-gray-500">
            Carl Smith, Bureau of Digital
          </div>
          <div className="mt-4 text-[13px] font-extrabold underline text-[#00ad6a]">
            Read Customer Story &#8594;
          </div>
        </div>
      </section>


      <section className="h-[700px] w-full relative">
        <Image data-aos="fade-in" data-aos-duration="2000" src="/images/guy-smile.jpg" alt="Customer-Review" fill objectFit="cover" className="relative"/>
        
        <div className="absolute bg-green-600 bg-opacity-60 z-10 inset-0 flex items-center px-4">
          <div data-aos="fade-up-right" className="text-white w-full md:w-[530px] ml-6 md:ml-16">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight md:leading-[50px] animate-pulse text-center md:text-left">
              Pulse is specifically designed for small businesses.
            </h2>
            <p className="mt-6 text-base md:text-lg w-full md:w-[430px] text-center md:text-left">
              Our customers include creative and technology agencies, service providers, restaurants, manufacturers, retail shops, contractors, freelancers, and more.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-black text-lg font-extrabold mt-7 bg-white px-5 py-3 transition-all duration-200 hover:px-7 active:opacity-70">
                Sign Up For a Free 30-Day Trial
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="md:h-[800px] h-auto flex flex-col items-center justify-center">
        <div data-aos="zoom-in-up" className="flex flex-col items-center text-center w-auto md:w-[500px]">
          <h3 className="text-2xl md:text-4xl mt-32 md:mt-0 font-bold md:font-extrabold leading-[50px]">Can your spreadsheets do this?</h3>
          <p className="text-gray-600 ">Pulse is like your cash flow spreadsheet, except the math isn&apos;t wrong. Also, Pulse has:</p>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-3 gap-y-10 md:gap-y-20 w-80 md:w-auto gap-x-5 px-5 md:px-10 mt-12">
          <div data-aos="flip-up" data-aos-duration= "2000" className="flex flex-col items-center">
            <Image src="/images/cash-flow.png" alt="cash-flow" width={55} height={55} className="w-10 md:w-[55px]" />
            <h4 className="mt-8 text-center font-extrabold text-lg">Multiple Cash Flow Views</h4>
            <p className="mt-1 font-light text-gray-600 text-sm text-center">Monitor your cash flow on a yearly, monthly, weekly, daily transactional basis.</p>
          </div>
          <div data-aos="flip-up" data-aos-duration= "2000" className="flex flex-col items-center  ">
            <Image src="/images/projects.png" alt="customer-project" width={55} height={55} className="w-10 md:w-[55px]" />
            <h4 className="mt-8 text-center font-extrabold text-lg">Customers and Projects</h4>
            <p className="mt-1 font-light text-gray-600 text-sm text-center">Run cash flow reports on customers and projects to see how profitable they&apos;re going to be.</p>
          </div>
          <div data-aos="flip-up" data-aos-duration= "2000" className="flex flex-col items-center ">
            <Image src="/images/reports.png" alt="visual-reports" width={55} height={55} className="w-10 md:w-[55px]" />
            <h4 className="mt-8 text-center font-extrabold text-lg">Visual Reports</h4>
            <p className="mt-1 font-light text-gray-600 text-sm text-center">With our easy-to-understand reports, you can see cash moving in and out of your business.</p>
          </div>
          <div data-aos="flip-up" data-aos-duration= "2000" className="flex flex-col items-center  ">
            <Image src="/images/currency.png" alt="currency-conversion" width={55} height={55} className="w-10 md:w-[55px]" />
            <h4 className="mt-8 text-center font-extrabold text-lg">Currency Conversion</h4>
            <p className="mt-1 font-light text-gray-600 text-sm text-center">If your business operates on multiple currencies, we have you covered with today&apos;s exchange rates.</p>
          </div>
          <div data-aos="flip-up" data-aos-duration= "2000" className="flex flex-col items-center ">
            <Image src="/images/team.png" alt="invite team" width={55} height={55} className="w-10 md:w-[55px]" />
            <h4 className="mt-8 text-center font-extrabold text-lg">Invite Your Team</h4>
            <p className="mt-1 font-light text-gray-600 text-sm text-center">Invite your team to help out, or showcase your projections to investors by giving them read-only access.</p>
          </div>
          <div data-aos="flip-up" data-aos-duration= "2000" className="flex flex-col items-center ">
            <Image src="/images/connect.png" alt="connect" width={55} height={55} className="w-10 md:w-[55px]" />
            <h4 className="mt-8 text-center font-extrabold text-lg">Connects to Quickbooks Online</h4>
            <p className="mt-1 font-light text-gray-600 text-sm text-center">Save time and reduce errors by keeping Pulse and your accounting software in sync.</p>
          </div>
        </div>

        <div className="mt-12 text-lg font-extrabold text-[#00ad6a] underline cursor-pointer transition-all duration-[]
        hover:text-black animate-bounce">
          <a href="https://pulseapp.com/features">See Everyting pulse Does &#8594;</a>
        </div>
      </section>

      <section className="mt-32 border-t-gray-200 border-t-[3px] h-auto py-6 md:py-16 flex flex-col md:flex-row justify-evenly items-center px-2 md:px-5 space-y-10 md:space-y-0">
        <div data-aos="zoom-in-up" data-aos-duration="1000" className="w-full md:w-[600px] text-center md:text-left">
          <h3 className="text-2xl md:text-4xl md:leading-[45px]  font-extrabold">Pulse is the easy, online way to manage and project your cash flow.</h3>
          <button className="text-[#00ad6a] font-bold px-9 py-4 mt-7 border-2 border-[#00ad6a] transition-all
          duration-[0.25s] hover:text-white hover:bg-[#00ad6a] hover:border-[#eafaf1]"><a href="https://pulseapp.com/customer-stories">See All Customer Stories</a></button>  
        </div>

        <div data-aos="flip-right" data-aos-duration="1000" className="w-[400px] bg-white border-solid border-gray-200 border-2
        flex flex-col items-center p-10 animate-pulse ">
          <Image src="/images/avatar-2.png" alt="avatar-profile" width={80} height={80}/>
          <div className="mt-5 text-2xl text-center text-[#00ad6a]">“Pulse has allowed us to visualize our cash flow before our brains turned to mush trying to deal with receipts, spreadsheets and accordion folders.”</div>
          <div className="text-[12px] tracking-widest mt-5 font-extrabold text-gray-500">Casimir Loeber, RealtyNinja</div>
          <div className="mt-4 text-[13px] font-extrabold underline text-[#00ad6a] transition-all duration-[0.25s] hover:text-black">
            <a href="https://pulseapp.com/customer-stories/case-study-realtyninja">Read Customer Story &#8594;</a>
          </div>
        </div>
      </section>

      <section data-aos="zoom-in" 
      className="md:h-[150px] h-auto bg-gradient-to-r from-[#00ad6a] to-[#1fe374] flex justify-center items-center text-center">
        <div className="text-white text-xl md:text-4xl md:py-0 py-9 font-extrabold underline underline-offset-1
        transition-all duration-[0.25s] hover:text-black"><a href="https://signup.pulseapp.com/plus">Sign Up for a Free 30-Day Trial &#8594;</a></div>
      </section>
    </main>
  )
}