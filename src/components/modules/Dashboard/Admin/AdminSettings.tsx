"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Switch } from "@nextui-org/switch";

export default function AdminSettings() {
  return (
    <div className="p-6 rounded-lg shadow-md bg-gray-800 text-gray-100">
      <form className="flex flex-col space-y-4">
        {/* Input field */}
        <Input
          className="bg-gray-700 text-gray-100 border-gray-600"
          label="Payment Gateway (Aamarpay/Stripe)"
          placeholder="Enter API Key"
        />

        {/* Switch field */}
        <div className="flex items-center space-x-4">
          <h2 className="font-semibold">Enable Premium Features</h2>
          <Switch defaultChecked color="primary" />
        </div>

        {/* Submit Button */}
        <Button
          className="w-full py-2 text-lg font-semibold bg-blue-600 text-white rounded-md shadow-lg transition-all hover:opacity-90"
          type="submit"
        >
          Save Settings
        </Button>
      </form>
    </div>
  );
}
