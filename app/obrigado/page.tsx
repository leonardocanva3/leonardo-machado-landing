import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070a] px-5 py-20 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(64,131,199,0.24),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(226,232,240,0.12),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-sky-200/[0.16] via-white/[0.075] to-white/[0.03] p-8 text-center shadow-[0_24px_90px_rgba(15,23,42,0.65)] sm:p-12">
        <p className="text-sm font-semibold tracking-[0.28em] text-sky-100 uppercase">
          Leonardo Machado
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Obrigado pelo contato.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          Recebi sua mensagem e retornarei o mais breve possível.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_18px_55px_rgba(226,232,240,0.22)] transition hover:scale-[1.01]"
        >
          Voltar para página inicial
        </Link>
      </div>
    </main>
  );
}
