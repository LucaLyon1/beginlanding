"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Inscription() {
    const [state, handleSubmit] = useForm("mldlrokb");
    if (state.succeeded) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
                <h1 className="text-3xl font-bold mb-4 text-[var(--primary)]">Merci pour votre inscription !</h1>
                <p className="text-lg text-gray-700 mb-2 text-center">Vous serez informé en avant-première du lancement de Begin Up.</p>
                <a href="/" className="mt-4 button-primary">Retour à l'accueil</a>
            </div>
        );
    }
    return (
        <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-[var(--primary)]">Inscrivez-vous à la liste d'attente</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">Recevez une invitation exclusive lors du lancement de la plateforme. Rejoignez la communauté des entrepreneurs, co-fondateurs et investisseurs français !</p>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border border-gray-100">
                <label htmlFor="email" className="font-semibold text-[var(--secondary)]">Adresse email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-base"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <button type="submit" disabled={state.submitting} className="button-primary mt-2 disabled:opacity-60">
                    {state.submitting ? "Envoi..." : "Je m'inscris"}
                </button>
                <p className="text-xs text-gray-400 mt-2 text-center">Nous ne partagerons jamais votre email. Désinscription possible à tout moment.</p>
            </form>
        </main>
    );
}