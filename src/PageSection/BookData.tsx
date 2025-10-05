import React, { useEffect, useState } from "react";
import { Link } from "react-router";

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        imageLinks?: {
            thumbnail?: string;
        };
        description?: string;
        previewLink: string;
    };
}

function IslamicLibrary() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch(
            "https://www.googleapis.com/books/v1/volumes?q=islamic+library&maxResults=8"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.items) {
                    setBooks(data.items);
                }
            })
            .catch((err) => console.error("বই আনতে সমস্যা হয়েছে:", err));
    }, []);

    return (
        <section className="py-16 px-4 bg-gradient-to-r from-amber-50 via-white to-amber-50">
            {/* Section Headline */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-800 mb-3">
                    Islamic Library
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
                    Explore a curated collection of inspiring Islamic books for learning, reflection, and growth.
                </p>
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                {books.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500 text-lg">
                        Loading books...
                    </p>
                ) : (
                    books.map((book) => (
                        <article
                            key={book.id}
                            className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
                        >
                            <img
                                src={
                                    book.volumeInfo.imageLinks?.thumbnail ||
                                    "https://via.placeholder.com/150x200?text=No+Image"
                                }
                                alt={book.volumeInfo.title}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {book.volumeInfo.title}
                                </h3>

                                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                                    {book.volumeInfo.description ||
                                        "No description available."}
                                </p>

                                <Link
                                    to={book.volumeInfo.previewLink}
                                    target="_blank"
                                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                                >
                                    Find out more
                                    <span
                                        aria-hidden="true"
                                        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                    >
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
}

export default IslamicLibrary;
