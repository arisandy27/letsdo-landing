export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#17211A]">
      <section className="px-6 py-8 md:px-16 lg:px-24">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            Let&apos;s Do<span className="text-emerald-700">..!</span>
          </div>

          <a
            href="https://msds.letsdo.id"
            className="rounded-full bg-[#17211A] px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Open MSDS Toolkit
          </a>
        </nav>

        <div className="grid min-h-[75vh] items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              Digital Tools for Safer & Better Operations
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Practical tools for chemical plant, safety, and manufacturing teams.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-700">
              Let&apos;s Do helps plant teams organize SDS/MSDS, improve process
              safety, track operational actions, and convert manufacturing data
              into better decisions.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://msds.letsdo.id"
                className="rounded-xl bg-emerald-700 px-6 py-4 text-center font-semibold text-white hover:bg-emerald-800"
              >
                Try MSDS Toolkit Pro
              </a>

              <a
                href="#products"
                className="rounded-xl border border-slate-300 px-6 py-4 text-center font-semibold hover:bg-white"
              >
                See Product Line
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <div className="rounded-2xl bg-[#17211A] p-6 text-white">
              <p className="mb-3 text-sm text-emerald-200">Featured Tool</p>

              <h2 className="mb-4 text-3xl font-bold">
                MSDS Toolkit Pro Web
              </h2>

              <p className="mb-6 text-slate-200">
                Manage material master data, SDS documents, hazard information,
                expiry review, and compliance readiness in one simple web app.
              </p>

              <div className="grid gap-3 text-sm">
                <div className="rounded-xl bg-white/10 p-4">
                  ✓ SDS document control
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  ✓ Hazard & pictogram mapping
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  ✓ Review date monitoring
                </div>
                <div className="rounded-xl bg-white/10 p-4">
                  ✓ Material master database
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-semibold text-emerald-700">Product Line</p>

          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Built from real plant operation needs.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">MSDS Toolkit Pro</h3>
              <p className="text-slate-600">
                Web-based SDS/MSDS management for chemical material control.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Process Safety Toolkit
              </h3>
              <p className="text-slate-600">
                Action tracker, MOC, PSSR, and process safety monitoring tools.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold">
                Plant Performance Tools
              </h3>
              <p className="text-slate-600">
                OEE, loss tree, batch performance, and improvement tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-700 p-10 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Start with MSDS Toolkit Pro Web.
          </h2>

          <p className="mb-8 text-emerald-50">
            A simple first step to make chemical material control more
            structured, traceable, and audit-ready.
          </p>

          <a
            href="https://msds.letsdo.id"
            className="inline-block rounded-xl bg-white px-6 py-4 font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Open msds.letsdo.id
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Let&apos;s Do..! — Digital tools for manufacturing, safety, and
        productivity.
      </footer>
    </main>
  );
}