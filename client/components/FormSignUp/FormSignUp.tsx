"use client";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const FormSignUp = () => {
    return (
        <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="First Name" className="sr-only">
                        Nom
                    </label>
                    <input
                        id="First Name"
                        name="First Name"
                        type="First Name"
                        autoComplete="First Name"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Nom"
                    />
                </div>
                <div>
                    <label htmlFor="First Name" className="sr-only">
                        Prénom
                    </label>
                    <input
                        id="Last Name"
                        name="Last Name"
                        type="Last Name"
                        autoComplete="Last Name"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Prénom"
                    />
                </div>
                <div>
                    <label htmlFor="email-address" className="sr-only">
                        Adresse email
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Adresse email"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Mots de passe
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        placeholder="Mots de passe"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-sm">
                    <Link
                        href="/SignIn"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Déjà inscrit ? Connectez-vous
                    </Link>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                        />
                    </span>
                    Connexion
                </button>
            </div>
        </form>
    );
};

export default FormSignUp;
