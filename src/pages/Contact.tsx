import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-12 bg-gradient-to-r from-gray-900 to-black text-gray-200 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center w-full max-w-3xl mb-12"
      >
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Contact Me
        </h2>
      </motion.div>

      <Card className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-600">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-white">Name</Label>
                    <FormControl>
                      <Input {...field} placeholder="Your Name" className="bg-gray-800 text-white p-3 rounded-md" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-white">Email</Label>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Your Email" className="bg-gray-800 text-white p-3 rounded-md" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-white">Message</Label>
                    <FormControl>
                      <Textarea {...field} placeholder="Your Message" className="bg-gray-800 text-white p-3 rounded-md" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-105 hover:bg-indigo-600">
                Send Message
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://github.com/viswanandMuruganantham" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="cursor-pointer text-green-500 hover:text-white transition duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/viswanand-muruganantham-28147a253/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="cursor-pointer text-blue-500 hover:text-blue-700 transition duration-300" />
        </a>
        <a href="mailto:viswanand004@outlook.com">
          <FaEnvelope size={30} className="cursor-pointer text-white hover:text-blue-500 transition duration-300" />
        </a>
      </div>
    </div>
  );
}