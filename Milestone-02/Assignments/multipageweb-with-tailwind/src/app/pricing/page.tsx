"use client"
import Image from "next/image"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Pricing() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <section className="md:pt-20 pt-16 py-10 md:py-0 md:h-[1400px] h-auto px-6 md:px-52 flex flex-col items-center bg-[#eafaf1] border-b-[2px] border-b-gray-300">
        <div className="md:text-center w-auto  md:w-[530px]  animate-fadeInUp ">
          <h1 className="md:text-5xl text-4xl font-bold md:font-extrabold ">Try Pulse free for 30 days.</h1>
          <p className="mt-5 tracking-wider text-[17px] ">See why Pulse is the best way to monitor your cash flow. Sign up for any plan and try Pulse absolutely free for 30 days.</p>
        </div>

        <div className="flex md:flex-row flex-col  md:justify-between items-center mt-10 gap-y-12 md:gap-0 md:mt-24">

          <div data-aos="flip-left" className="w-auto md:w-[650px] px-7">
            <h3 className="text-xl font-bold md:font-extrabold text-green-600 leading-6 ">These are what we call the Pulse Basics. They’re what every customer gets.</h3>
            <ul className="mt-5 list-disc leading-6 tracking-wider text-[15px] text-gray-600">
              <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
              <li>Forecast growth with recurring income or expenses that scale automatically</li>
              <li>Works with any currency</li>
              <li>See Money In and Money Out, categorize transactions, and run helpful reports</li>
              <li>Toggle entries and accounts on and off to game out different scenarios</li>  
            </ul>         
            <div className="mt-5 tracking-wider text-[15px]" ><span className=" text-gray-600">Just need the Pulse Basics?</span> <br />
            <u>Get them now</u> for $29 per month.</div>   
          </div>

          <div data-aos="flip-up" className="bg-white flex  flex-col md:items-center relative border-solid rounded-t-xl overflow-hidden
          border-green-600 border-[1px] md:px-10 px-5 pb-5 md:pb-10">
            <header className="absolute top-0 left-0 right-0 text-center
            bg-green-600 py-1 text-white text-xs font-bold md:font-bold">RECOMMENDED</header>
            <h3 className="md:mt-20 mt-6 md:text-5xl text-4xl font-bold md:font-extrabold text-green-600 md:text-center ">Small Business Plan</h3>
            <p className="md:text-2xl text-xl text-gray-500 md:text-center md:mt-3">$59 per month</p>
            <button className="mt-5 text-lg font-bold md:font-extrabold tracking-wide bg-green-400 px-8 py-3 text-gray-700
            transition-all duration-[0.25s] hover:opacity-45 active:opacity-35 animate-pulse">Sign Up Now</button>
            <h4 className="mt-10 text-center text-xs tracking-widest font-bold md:font-extrabold text-gray-600">YOUR GET PULSE BASICS, PLUS:</h4>
            <ul className="mt-3 list-disc tracking-wide text-gray-500">
              <li>Manage cash flow from multiple financial accounts</li>
              <li className="mt-4">Invite your investors, book keeper, or management team to see reports or manage cash flow</li>
              <li className="mt-4">Integrate with QuickBooks Online for more accurate cash flow</li>
              <li className="mt-4">Track your actual cash flow alongside your projected cash flow</li>
            </ul>
          </div>

          <div data-aos="flip-right" className="flex flex-col md:items-center border-solid border-1px md:border-y-[1px] border-r-[1px] border-gray-400 bg-white px-5 md:px-10 pb-5 md:pb-10 relative" >
            <header className="absolute top-0 left-0 right-0 font-bold md:font-medium md:text-center leading-5 text-sm text-gray-500 bg-gray-100
             px-8 py-4 border-b-[1px] border-gray-300">Complex business with multiple financial accounts, currencies, or auditing needs?</header>
            <h3 className="md:mt-24 mt-28 md:text-4xl text-3xl text-green-600 md:text-center">Unlock Extra Features</h3>
            <p className="md:text-2xl text-xl text-gray-500 md:text-center md:mt-3">$89 per month</p>
            <button className="mt-5 text-lg font-bold md:font-extrabold tracking-wide bg-green-400 px-8 py-3 text-gray-700
            transition-all duration-[0.25s] hover:opacity-45 active:opacity-35 animate-pulse ">Try Premium</button>
            <h4 className="mt-10 text-center text-xs tracking-widest font-bold md:font-extrabold text-gray-600">GET IT ALL, PLUS:</h4>
            <ul className="mt-3 list-disc tracking-wide text-gray-500">
              <li className="mt-4">Manage cash flow from multiple financial accounts</li>
              <li className="mt-4">Convert to any currency for localized cash flow reporting and projections</li>
              <li className="mt-4">Attach invoices or contracts to your cash flow entries for accountability and auditing</li>
            </ul>
          </div>

        </div>

        <div data-aos="fade-up" className="md:mt-32 mt-14 flex flex-col items-center">
          <Image src="/images/pricing.png" height={80} width={80} alt="Pricing"
          className="md:w-[80px] w-[55px]" />
          <div className="mt-5 md:text-2xl text-lg font-bold md:font-light text-gray-700 text-center w-auto md:w-[800px] tracking-wide md:tracking-wider ">“Pulse is worth every penny because it empowers business owners with critical financial insight and knowledge.”</div>
          <div className="mt-5 text-xs font-bold md:font-bold md font-bold:md:font-extrabold tracking-widest text-green-600 uppercase animate-bounce">Subvert Marketing, Inc.</div>
        </div>
      </section>

      <section className="h-auto md:h-[900px] py-10 md:py-24 px-6 md:px-24">
        
        <h1 className="md:text-4xl text-3xl font-bold md:font-extrabold ">FAQ</h1>

        <div className="md:mt-10 mt-5 grid md:grid-cols-2 grid-cols-1 md:gap-x-9 gap-y-12">
          <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[550px] w-auto">
            <h3 className="text-lg font-bold md:font-extrabold">How does the 30-day free trial work?</h3>
            <p className="mt-1 md:text-lg md:tracking-wider tracking-wide md:leading-7 text-gray-500">You can use Pulse absolutely free for 30 days. After 30 days, we will charge the credit card you used when you sign up. If you choose to cancel your account before your trial ends, your card will not be charged.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[550px] w-auto">
            <h3 className="text-lg font-bold md:font-extrabold">If I upgrade an existing account, do I get another free trial?</h3>
            <p className="mt-1 md:text-lg md:tracking-wider tracking-wide md:leading-7 text-gray-500">Brand new accounts are the only ones eligible for a 30-day free trial. If you upgrade an existing account, your credit card will be billed the new amount on the date of your next billing cycle.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[550px] w-auto">
            <h3 className="text-lg font-bold md:font-extrabold">What is a “Financial Account”?</h3>
            <p className="mt-1 md:text-lg md:tracking-wider tracking-wide md:leading-7 text-gray-500">Financial Accounts are a grouping of income and expense items that can be used for tracking or reporting purposes.
              <br /> <br /> They’re designed to be flexible and can be used to differentiate between bank accounts, companies, individuals or between personal and business entries.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[550px] w-auto">
            <h3 className="text-lg font-bold md:font-extrabold">Do I have to commit to a long-term contract?</h3>
            <p className="mt-1 md:text-lg md:tracking-wider tracking-wide md:leading-7 text-gray-500">No. There is no contract when you use Pulse, other than agreeing to our Terms of Service.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[550px] w-auto">
            <h3 className="text-lg font-bold md:font-extrabold">Will I be able to cancel my account if I don’t use Pulse?</h3>
            <p className="mt-1 md:text-lg md:tracking-wider tracking-wide md:leading-77 text-gray-500">Yes – you can cancel your account at any time. To cancel your account, go to your billing page and click on “Please cancel my account” at the bottom of the page. The account owner is the only one who can cancel an account. An email request to delete an account is not considered cancellation.</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="md:w-[550px] w-auto">
            <h3 className="text-lg font-bold md:font-extrabold">What types of payments do you accept?</h3>
            <p className="mt-1 md:text-lg md:tracking-wider tracking-wide md:leading-7 text-gray-500">We accept payments made online using Visa, Mastercard, Discover, and American Express.</p>
          </div>

        </div>
      </section>
    </main>
  )
}