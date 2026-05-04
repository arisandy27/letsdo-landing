const products = [
  {
    title: "MSDS Toolkit Pro Web",
    tag: "Live Product",
    description:
      "SDS/MSDS management, hazard mapping, review monitoring, and material master control for chemical teams.",
  },
  {
    title: "Process Safety Toolkit",
    tag: "Coming Next",
    description:
      "MOC, PSSR, action tracker, process safety KPI, and audit readiness tools for plant operations.",
  },
  {
    title: "Plant Performance Tools",
    tag: "Coming Next",
    description:
      "OEE, loss tree, batch performance, downtime analysis, and improvement tracking for manufacturing teams.",
  },
];

const painPoints = [
  "SDS/MSDS files scattered across folders and personal computers.",
  "Hazard information, pictograms, and review dates are difficult to monitor.",
  "Process safety actions are often tracked manually and not easy to follow up.",
  "Plant performance data exists, but is not always converted into decisions.",
];

const users = [
  "Plant Manager",
  "QHSE / SHE Team",
  "Warehouse & Logistic Team",
  "Production Team",
  "QC / QA Team",
  "Maintenance & Engineering",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] text-[#132018]">
      <section className="px-6 py-6 md:px-16 lg:px-24">
  <nav className="grid grid-cols-3 items-start">
  <div className="flex justify-start">
    <div className="flex flex-col items-center">
      <a href="/" className="flex items-center justify-start">
        <img
          src="/icon.png"
          alt="Let's Do logo"
          className="h-16 w-auto md:h-20"
        />
      </a>

      <div className="mt-3">
        <p className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800">
          Digital Tools for Safer & Better Operations
        </p>
      </div>
    </div>
  </div>

    <div className="hidden justify-center gap-8 text-sm font-semibold md:flex">
      <a href="#products" className="hover:text-emerald-700">
        Products
      </a>
      <a href="#users" className="hover:text-emerald-700">
        Users
      </a>
      <a href="#value" className="hover:text-emerald-700">
        Value
      </a>
    </div>

    <div className="flex justify-end">
      <a
        href="https://msds.letsdo.id"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#132018] px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800"
      >
        Open MSDS Toolkit
      </a>
    </div>
  </nav>

  <div className="grid min-h-[62vh] items-center gap-8 py-8 lg:grid-cols-2">
    <div>
      
      
      <h1 className="mb-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-5xl">
        Practical tools for chemical plant, safety, and manufacturing teams.
      </h1>

      <p className="mb-6 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
        Let&apos;s Do helps plant teams manage SDS/MSDS, improve process safety,
        monitor actions, and convert operational data into better decisions.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="https://msds.letsdo.id"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-emerald-700 px-7 py-4 text-center font-bold text-white shadow-sm hover:bg-emerald-800"
        >
          Try MSDS Toolkit Pro
        </a>

        <a
          href="#products"
          className="rounded-xl border border-slate-300 bg-white/50 px-7 py-4 text-center font-bold hover:bg-white"
        >
          See Product Line
        </a>
      </div>

      <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-2xl font-black text-emerald-700">01</p>
          <p className="mt-1 text-xs font-semibold text-slate-600">
            Live Web App
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-2xl font-black text-emerald-700">SDS</p>
          <p className="mt-1 text-xs font-semibold text-slate-600">
            Document Control
          </p>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <p className="text-2xl font-black text-emerald-700">QHSE</p>
          <p className="mt-1 text-xs font-semibold text-slate-600">
            Audit Ready
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-[2rem] bg-white p-6 shadow-2xl">
      <div className="rounded-[1.5rem] bg-[#132018] p-8 text-white">
        <p className="mb-3 text-sm font-semibold text-emerald-200">
          Featured Product
        </p>

        <h2 className="mb-4 text-4xl font-black">
          MSDS Toolkit Pro Web
        </h2>

        <p className="mb-8 leading-7 text-slate-200">
          Manage material master data, SDS documents, hazard information,
          review status, and compliance readiness in one simple web app.
        </p>

        <div className="grid gap-4 text-sm font-semibold">
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

      <section id="value" className="bg-white px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-bold text-emerald-700">Why Let&apos;s Do?</p>
            <h2 className="mb-6 text-4xl font-black tracking-tight md:text-5xl">
              Built from real plant operation problems.
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Many plant teams already have data and documents, but the
              challenge is making them structured, traceable, and useful for
              daily decisions.
            </p>
          </div>

          <div className="grid gap-4">
            {painPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#F7F4EF] p-5 font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-bold text-emerald-700">Product Line</p>
          <h2 className="mb-10 text-4xl font-black tracking-tight md:text-5xl">
            Digital tools for manufacturing, safety, and productivity.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  {product.tag}
                </p>
                <h3 className="mb-4 text-2xl font-black">{product.title}</h3>
                <p className="leading-7 text-slate-600">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="users" className="bg-[#132018] px-6 py-20 text-white md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-bold text-emerald-300">Who is this for?</p>
          <h2 className="mb-10 text-4xl font-black tracking-tight md:text-5xl">
            Designed for teams who run, control, and improve plant operations.
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <div
                key={user}
                className="rounded-2xl border border-white/10 bg-white/10 p-5 font-bold"
              >
                {user}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 lg:px-24">
  <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-emerald-700 p-10 text-white shadow-xl md:grid-cols-[1.4fr_0.6fr] md:p-16">
    <div>
      <p className="mb-3 font-bold text-emerald-100">Request Demo</p>

      <h2 className="mb-5 text-4xl font-black tracking-tight md:text-5xl">
        Want to try Let&apos;s Do tools for your plant team?
      </h2>

      <p className="max-w-2xl text-lg leading-8 text-emerald-50">
        Start with MSDS Toolkit Pro Web. Request demo access, pilot discussion,
        or product explanation through WhatsApp.
      </p>
    </div>

    <div className="flex flex-col justify-center gap-4">
      <a
        href="https://wa.me/628118712957?text=Halo%20Let%27s%20Do%2C%20saya%20ingin%20request%20demo%20MSDS%20Toolkit%20Pro."
        target="_blank"
        rel="noreferrer"
        className="rounded-xl bg-white px-8 py-4 text-center font-black text-emerald-800 hover:bg-emerald-50"
      >
        Request Demo via WhatsApp
      </a>

      <a
        href="https://msds.letsdo.id"
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-white/40 px-8 py-4 text-center font-black text-white hover:bg-white/10"
      >
        Open MSDS Toolkit
      </a>
    </div>
  </div>
</section>

      <footer className="border-t border-slate-200 px-6 py-8 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © 2026 Let&apos;s Do..! Digital tools for manufacturing, safety, and
            productivity.
          </p>
          <div className="flex gap-5">
            <a href="https://letsdo.id" className="hover:text-emerald-700">
              letsdo.id
            </a>
            <a href="https://msds.letsdo.id" className="hover:text-emerald-700">
              msds.letsdo.id
            </a>
<a
  href="https://wa.me/628118712957"
  target="_blank"
  rel="noreferrer"
  className="hover:text-emerald-700"
>
  WhatsApp
</a>
          </div>
        </div>
      </footer>
    </main>
  );
}