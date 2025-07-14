import Image from "next/image";
import { FaHandshake, FaLightbulb, FaComments, FaUserFriends } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl py-16">
        <Image
          src="/logo_full.png"
          alt="Begin Up Logo"
          width={220}
          height={80}
          priority
          className="mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: 'var(--secondary)' }}>
          Begin Up, le lancement
        </h1>
        <h1 className="p-1 text-4xl md:text-5xl text-white font-bold text-center mb-4" style={{ backgroundColor: 'var(--primary)' }}>
          approche ...
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 text-gray-700 max-w-xl">
          La plateforme française pour connecter les entrepreneurs et co-fondateurs. Partagez, matchez, innovez.
        </p>
        <Link href="/inscription" className="button-primary mb-4 shadow-lg">Rejoindre la liste d&apos;attente</Link>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-4xl py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center px-4">
          <FaHandshake size={40} className="mb-4 text-[var(--secondary)]" />
          <h2 className="section-title">Trouvez votre co&#8209;fondateur</h2>
          <p>Matchez avec des profils complémentaires selon vos compétences et vos idées.</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <FaLightbulb size={40} className="mb-4 text-[var(--secondary)]" />
          <h2 className="section-title">Partagez et inspirez</h2>
          <p>Publiez des projets, sondages, images et rassemblez une audience comme sur LinkedIn.</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <FaComments size={40} className="mb-4 text-[var(--secondary)]" />
          <h2 className="section-title">Discutez & investissez</h2>
          <p>Rencontrez des co-fondateurs, échangez et faites grandir vos projets ensemble.</p>
        </div>
        <div className="flex flex-col items-center text-center px-4">
          <FaUserFriends size={40} className="mb-4 text-[var(--secondary)]" />
          <h2 className="section-title">Un matching innovant</h2>
          <p>Un système de swipe pour matcher selon vos compétences, idées ou besoins.</p>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="w-full flex flex-col items-center py-8">
        <Link href="/inscription" className="button-primary">Je veux être informé du lancement</Link>
      </section>
    </main>
  );
}
