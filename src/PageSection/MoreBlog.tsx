"use client";

import { motion } from "framer-motion";

const AboutBookPage = () => {
    const images = [
        "/images/bb.jpg",
        "/images/ddd.jpg",
        "/images/aa.jpg",
    ];

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-50 via-white to-amber-50 py-16 px-6">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center rounded-3xl shadow-xl p-8 md:p-14 bg-amber-50 border-white"
            >
                {/* Text Section */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-4xl font-bold mb-6 text-cyan-800"
                    >
                        About The Book
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-muted-foreground text-lg leading-relaxed mb-6"
                    >
                        Dive deep into a journey of knowledge and imagination. This book
                        unfolds timeless lessons, untold stories, and life-changing wisdom
                        that guide you toward a more meaningful life. Every page is crafted
                        to inspire, motivate, and spark creativity within you.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Whether you’re reading it for self-growth, curiosity, or simply
                        to escape into a world of thought — this book promises to leave a
                        lasting impact on your heart and mind.
                    </motion.p>
                </div>

                {/* Image Section */}
                <div className="grid grid-cols-2 gap-4 relative">
                    <motion.img
                        src={images[0]}
                        alt="Book Preview 1"
                        className="rounded-xl shadow-md object-cover h-56 w-full md:h-64"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    />
                    <motion.img
                        src={images[1]}
                        alt="Book Preview 2"
                        className="rounded-xl shadow-md object-cover h-56 w-full md:h-64 mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                    />
                    <motion.img
                        src={images[2]}
                        alt="Book Preview 3"
                        className="absolute right-0 bottom-[-30px] rounded-xl shadow-lg object-cover w-2/3 h-56 md:h-64 border-4 border-background"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default AboutBookPage;
