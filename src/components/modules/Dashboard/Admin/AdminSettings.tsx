'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Switch } from "@nextui-org/switch";


export default function AdminSettings() {
    return (
        <div className="p-6">
            <form className="flex flex-col space-y-4">
                <Input label="Payment Gateway (Aamarpay/Stripe)" placeholder="Enter API Key" />
                <div className="flex items-center space-x-4">
                    <h2>Enable Premium Features</h2>
                    <Switch checked={true} />
                </div>
                <Button type="submit" color="success">Save Settings</Button>
            </form>
        </div>
    );
}
