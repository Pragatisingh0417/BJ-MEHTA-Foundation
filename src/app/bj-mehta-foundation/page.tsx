// app/bj-mehta-foundation/page.tsx
import React from "react";

export const metadata = {
  title: "Donate to B J Mehta Foundation",
  description: "Donation form for B J Mehta Foundation",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Donate to B J Mehta Foundation
        </h1>

        {/* DONATION DETAILS */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Donation Details</h2>

          {/* CURRENCY */}
          <label className="block font-medium mb-1">Currency</label>
          <select className="border rounded-lg p-3 w-full mb-4">
            <option>GBP - Pound Sterling</option>
          </select>

          {/* AMOUNT */}
          <label className="block font-medium mb-1">Amount (£)</label>
          <input type="number" className="border rounded-lg p-3 w-full mb-4" placeholder="Enter amount" />

          {/* DONATION TYPE */}
          <label className="block font-medium mb-2">Donation Type</label>
          <div className="flex gap-4 mb-4">
            <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">One-off</button>
            <button className="px-5 py-2 border rounded-lg hover:bg-gray-100">Monthly</button>
          </div>

          {/* MESSAGE OPTION */}
          <label className="block font-medium mb-2">Would you like to add a Message?</label>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2"><input type="radio" name="msg" /> Yes</label>
            <label className="flex items-center gap-2"><input type="radio" name="msg" /> No</label>
          </div>
        </div>

        {/* USER DETAILS */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Details</h2>

          <label className="block font-medium mb-1">Your Email Address</label>
          <input type="email" className="border rounded-lg p-3 w-full mb-4" placeholder="Enter email" />

          <label className="block font-medium mb-1">Confirm Email Address</label>
          <input type="email" className="border rounded-lg p-3 w-full mb-4" placeholder="Confirm email" />
        </div>

        {/* GIFT AID */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Gift Aid</h2>
          <p className="text-gray-600 mb-3 text-sm">
            Would you like to make this a Gift Aid donation? Choosing Gift Aid increases your
            donation by 25% at no extra cost to you.
          </p>

          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2"><input type="radio" name="giftAid" /> Yes, add Gift Aid</label>
            <label className="flex items-center gap-2"><input type="radio" name="giftAid" /> No, don't add Gift Aid</label>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button className="w-full bg-black text-white p-4 rounded-xl text-lg font-semibold hover:bg-black">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
