import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BookCard from "./BookCard";

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

const NewBooks: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch(
            "https://www.googleapis.com/books/v1/volumes?q=islamic+books+library&maxResults=12"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.items) {
                    setBooks(data.items);
                }
            })
            .catch((err) => console.error("বই আনতে সমস্যা হয়েছে:", err));
    }, []);

    return (
        <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 overflow-hidden">
            <motion.section
                className="py-16 px-4"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1.8,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Title */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-800 mb-3">
                        Best English Books
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Explore a collection of inspiring books powered by Google Books API.
                    </p>
                </motion.div>

                {/* Book Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    viewport={{ once: true }}
                >
                    {books.length === 0 ? (
                        <p className="col-span-full text-center text-gray-500 text-lg">
                            Loading books...
                        </p>
                    ) : (
                        books.map((book, index) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                            >
                                <BookCard book={book} />
                            </motion.div>
                        ))
                    )}
                </motion.div>
            </motion.section>
        </div>
    );
};

export default NewBooks;
