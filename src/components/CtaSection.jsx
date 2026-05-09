export default function CtaSection() {
  return (
    <section className="py-xl px-margin bg-surface-container-lowest border-t border-outline-variant/10">
      <div className="max-w-4xl mx-auto text-center space-y-lg">
        <h2 className="font-display-xl text-display-xl text-on-surface">Ready to secure the future?</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Join over 500 global institutions using ClimateOS to drive environmental accountability and
          operational excellence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-md pt-md">
          <button className="bg-primary text-on-primary font-bold px-xl py-md rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
            Request a Demo
          </button>
          <button className="bg-transparent border border-outline text-on-surface font-bold px-xl py-md rounded-lg hover:bg-surface-variant/30 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
