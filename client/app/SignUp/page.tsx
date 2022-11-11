import Link from "next/link";
import React from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import FormSignUp from "../../components/FormSignUp/FormSignUp";

const SignUp = () => {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Inscrivez-vous !
                        </h2>
                    </div>
                    <FormSignUp />
                </div>
            </div>
        </>
    );
};

export default SignUp;
