'use client';
import HeaderPage from "@/components/header-page";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";

export default function Checkout() {
  const { cart} = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setIsMounted(true), []);

  const calculateSubtotal = () => 
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (cart.length === 0) throw new Error("Your cart is empty");
      
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const email = formData.get('mail') as string;
      const name = formData.get('first-name') as string;
      const orderId = `ORD-${Date.now()}`;

      if (!email || !name) throw new Error("Please fill all required fields");

      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
          })),
          total: calculateSubtotal(),
          orderId
        }),
      });

      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        const errorData = contentType?.includes('application/json')
          ? await response.json()
          : await response.text();
        throw new Error(errorData.error || errorData || 'Order processing failed');
      }

      const responseData = await response.json();
      console.log('Email sent:', responseData);


    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : "Order failed - please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;
  return (
    <main>
      <HeaderPage />
      <div className="mt-16 py-6 md:py-2 md:mt-20 account w-full flex justify-center items-center h-auto md:h-[300px]">
        <div className="flex flex-col items-center">
          <Image src={'/shop/hero-logo.png'} alt="logo" width={77} height={77} />
          <h1 className="text-4xl font-medium">Checkout</h1>
          <p className="font-medium text-base mt-4">Home &gt; Checkout</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-6 md:px-32 py-16 gap-12">
        {/* Billing Form */}
        <form onSubmit={handlePlaceOrder} id="checkout-form" className="flex flex-col text-sm font-semibold gap-y-6 md:w-1/2">
          <legend className="text-2xl font-semibold">Billing details</legend>
          
          {error && (
            <div className="text-red-500 p-3 border border-red-400 rounded-md mb-4">
              {error}
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-x-12 mt-10">
            <div className="flex flex-col gap-2 md:w-1/2">
              <label htmlFor="first-name">First Name</label>
              <input className="border-2 px-5 py-3 rounded-lg w-full" required type="text" name="first-name" id="first-name" placeholder="First Name" />
            </div>
            <div className="flex mt-5 md:mt-0 flex-col gap-2 md:w-1/2">
              <label htmlFor="last-name">Last Name</label>
              <input className="border-2 px-5 py-3 rounded-lg w-full" required type="text" name="last-name" id="last-name" placeholder="Last Name" />
            </div>
          </div>

          <label htmlFor="company" className="mt-2">Company Name (Optional)</label>
          <input className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="company" id="company" />

          <label htmlFor="country-select" className="mt-2">Country / Region</label>
          <select className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" id="country-select" name="countries">
            <option disabled defaultValue={"Select a country"}></option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Pakistan">Pakistan</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Brazil">Brazil</option>
          </select>

          <label htmlFor="address" className="mt-2">Street Address</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="address" id="address" />

          <label htmlFor="home" className="mt-2">Town / City</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="text" name="home" id="home" />

          <label htmlFor="province" className="mt-2">Province</label>
          <select className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" id="province" name="province">
            <option disabled defaultValue={"Select a Province"}></option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Australia">Australia</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
            <option value="Brazil">Brazil</option>
          </select>

          <label htmlFor="zip" className="mt-2">Zip Code</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="number" name="zip" id="zip" />

          <label htmlFor="phone" className="mt-2">Phone</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="number" name="phone" id="phone" />

          <label htmlFor="mail" className="mt-2">Email Address</label>
          <input required className="border-2 px-5 py-3 rounded-lg w-full md:w-[300px]" type="email" name="mail" id="mail" />

          <input required className="w-full mt-5 border-2 px-5 py-3 rounded-lg md:w-[300px]" type="text" name="home" id="home" placeholder="Additional Information" />
        </form>

        {/* Order Summary */}
        <div className="md:w-1/2 flex flex-col gap-y-3">
          <div className="flex py-7 border-b-2 justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Product</h2>
              {cart.map(item => (
                <p key={item.id} className="text-sm text-gray-400">
                  {item.name} <span className="text-black font-medium">x {item.quantity}</span>
                </p>
              ))}
              <p className="text-sm font-medium">Subtotal</p>
              <p className="text-sm font-medium">Total</p>
            </div>

            <div className="flex flex-col text-right gap-4">
              <h2 className="text-2xl font-semibold">Subtotal</h2>
              {cart.map(item => (
                <p key={item.id} className="text-sm font-medium">
                  Rs.{(item.price * item.quantity).toLocaleString()}
                </p>
              ))}
              <p className="text-sm font-medium">Rs.{calculateSubtotal().toLocaleString()}</p>
              <h2 className="text-2xl font-medium text-yellow-600">
                Rs.{calculateSubtotal().toLocaleString()}
              </h2>
            </div>
          </div>

          <div className="flex flex-col py-4 gap-y-3">
            <h1 className="text-lg font-semibold flex items-center gap-x-2">
              <div className="w-4 h-4 bg-black rounded-full"></div> Payment Method
            </h1>
            <p className="text-gray-400 tracking-wide">Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
            <div>
              <input className="mr-2" type="radio" name="payment" id="dbt" value="dbt" required />
              <label className="text-gray-400 tracking-wide font-semibold" htmlFor="dbt">Direct Bank Transfer</label>
            </div>
            <div>
              <input className="mr-2" type="radio" name="payment" id="cod" value="cod" />
              <label className="text-gray-400 tracking-wide font-semibold" htmlFor="cod">Cash On Delivery</label>
            </div>
            <button 
              type="submit"
              form="checkout-form"
              className={`text-lg px-10 border-[1px] border-black py-2 rounded-xl transition-all duration-200 cursor-pointer hover:bg-black hover:text-white active:opacity-80 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place order'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}