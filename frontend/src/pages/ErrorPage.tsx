import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="flex h-screen flex-col bg-white">
            <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt=""
                className="h-64 w-full object-cover"
            />

            <div className="flex flex-1 items-center justify-center">
                <div className="mx-auto max-w-xl px-4 py-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        We can't find that page.
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Try searching again, or return home to start from the beginning.
                    </p>

                    <Link
                        className="group relative inline-block overflow-hidden border border-teal-600 px-8 py-3 focus:outline-none focus:ring"
                        to="/"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-teal-600 transition-all group-hover:w-full group-active:bg-teal-500"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-teal-600 transition-colors group-hover:text-white"
                        >
                            Go Back To Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage