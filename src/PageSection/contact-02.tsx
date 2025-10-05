import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router";

const ContactPage = () => (
  <section className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-r from-amber-50 via-white to-amber-50">
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-0">
      {/* Headline */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-cyan-800 sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Have questions, feedback, or want to collaborate? Send us a message and we will get back to you shortly.
        </p>
      </div>

      {/* Form Card */}
      <Card className="bg-white shadow-lg rounded-xl">
        <CardContent className="p-6 md:p-8">
          <form>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  placeholder="First name"
                  id="firstName"
                  className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  placeholder="Last name"
                  id="lastName"
                  className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="mt-2 bg-gray-100 h-12 shadow-sm focus:ring-2 focus:ring-[#461356]"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  className="mt-2 bg-gray-100 shadow-sm focus:ring-2 focus:ring-[#461356]"
                  rows={6}
                />
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <Checkbox id="acceptTerms" className="bg-background" />
                <Label htmlFor="acceptTerms" className="gap-0">
                  You agree to our
                  <Link to="#" className="underline ml-1 text-blue-600">
                    terms and conditions
                  </Link>
                  <span>.</span>
                </Label>
              </div>
            </div>

            <Button className="mt-6 w-full bg-cyan-800 text-white hover:bg-cyan-800 transition" size="lg">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ContactPage;
