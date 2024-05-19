import Link from 'next/link'

function NotFound() {
  return (
    <main className="isolate mx-auto flex  h-screen max-w-7xl flex-col justify-center px-6 py-32 text-center sm:py-40 lg:px-8">
      <p className="text-2xl font-semibold leading-8 text-black">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl">Stranica nije pronađena</h1>
      <p className="mt-4 text-xl text-gray sm:mt-6">Nažalost nismo našli ono što ste tražili.</p>
      <div className="mt-10 flex justify-center">
        <Link href="/" className="text-lg font-semibold leading-7 text-black underline">
          <span aria-hidden="true">&larr;</span> Povratak na početnu stranicu
        </Link>
      </div>
    </main>
  )
}

export default NotFound
