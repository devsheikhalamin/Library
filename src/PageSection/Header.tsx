function HeaderPage() {
    return (
        <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                    {/* Text Section */}
                    <div className="max-w-xl md:max-w-none">
                        <h2 className="text-4xl font-extrabold text-cyan-800 sm:text-5xl text-center lg:text-left">
                            Life Of The Wild
                        </h2>
                        <p className="mt-6 text-gray-700 text-lg sm:text-base text-center lg:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo, repellat quisquam recusandae aliquam labore modi sequi nam inventore itaque. Accusamus optio eos reprehenderit, numquam tenetur provident
                        </p>

                        <div className="mt-8 text-center lg:text-left">
                            <button className="bg-cyan-800 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform font-medium">
                                Read More
                            </button>
                        </div>
                    </div>


                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="./images/a.avif"
                            alt="Book Cover"
                            className="rounded-xl shadow-lg hover:scale-105 transition transform max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderPage;
