import { useForm, ValidationError } from "@formspree/react";
import { Icon } from "@iconify/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mzzjjgke");

  if (state.succeeded) {
    return (
      <section className="min-h-screen bg-neutral-900 w-full flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-neutral-800 rounded-2xl p-8 text-center animate-fadeIn">
          <div className="flex justify-center mb-4 text-orange">
            <Icon icon="line-md:check-all" width="50" height="50" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Message Sent!
          </h2>
          <p className="text-neutral-300">
            Thanks for contacting me. I will reply to you as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-neutral-900 w-full flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full flex flex-col gap-5">
        <h2 className="text-5xl font-bold border-b-2 border-orange w-fit text-white mx-auto">
          Let's talk
        </h2>
        <p className="text-neutral-400 mb-8 text-center">
          Do you have a project in mind? I would love to hear you
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-300 mb-2"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff8800] focus:ring-1 focus:ring-[#ff8800] transition-colors"
              placeholder="Your Name"
              disabled={state.submitting}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff8800] focus:ring-1 focus:ring-[#ff8800] transition-colors"
              placeholder="you@email.com"
              disabled={state.submitting}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-300 mb-2"
            >
              Messaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff8800] focus:ring-1 focus:ring-[#ff8800] transition-colors resize-none"
              placeholder="Write your message here..."
              disabled={state.submitting}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#ff8800] hover:bg-[#e67a00] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {state.submitting ? (
              <>
                <Icon icon="codex:loader" width="24" height="24" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Icon icon="tabler:send" width="24" height="24" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
