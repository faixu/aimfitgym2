import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";

interface LeadFormData {
  name: string;
  phone: string;
  goal: string;
}

export default function LeadForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    try {
      // Mock submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Lead submitted:", data);
      toast.success("Success! We'll contact you shortly.");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-secondary p-8 md:p-12 rounded-[2rem] border border-white/5 glow-red">
      <h3 className="text-2xl font-bold mb-2">Get a Free Trial</h3>
      <p className="text-subtext text-sm mb-8">Fill out the form below and start your journey today.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Full Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <span className="text-accent text-xs mt-1">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Phone Number</label>
          <input
            {...register("phone", { 
              required: "Phone is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit number"
              }
            })}
            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors"
            placeholder="9876543210"
          />
          {errors.phone && <span className="text-accent text-xs mt-1">{errors.phone.message}</span>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-subtext mb-2">Fitness Goal</label>
          <select
            {...register("goal", { required: "Please select a goal" })}
            className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-none transition-colors appearance-none"
          >
            <option value="">Select your goal</option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="General Fitness">General Fitness</option>
          </select>
          {errors.goal && <span className="text-accent text-xs mt-1">{errors.goal.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent py-4 rounded-xl font-bold text-lg glow-red hover:scale-[1.02] transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? "SUBMITTING..." : (
            <>
              GET FREE TRIAL <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
