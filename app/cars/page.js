"use client";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import CarsList from "../components/CarsList";
import AddCarForm from "../components/AddCarForm";
import LoginForm from "../components/loginForm";

export default function Home() {
    const { tokens } = useContext(AuthContext);

    return (
        <div className="p-4">
            {!tokens ? (<>

                <p className="text-center text-gray-600 dark:text-gray-300">Please log in to access this page.</p>
                <LoginForm />
            </>
            ) : (
                <div>
                    <div className="mb-8">
                        <CarsList />
                    </div>
                    <AddCarForm />
                </div>
            )}
        </div>
    );
}
