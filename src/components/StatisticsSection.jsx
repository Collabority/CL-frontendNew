import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

const StatisticsSection = ({ data }) => {
  return (
    <section className="py-20 bg-[#008080] rounded-b-[4rem] mb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative -mt-32">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-teal-900/10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-[#008080] flex items-center justify-center text-xl mb-6">
                <FaQuoteRight />
              </div>
              <h3 className="text-5xl font-black text-[#002248] mb-2 tracking-tighter">
                {item.number}
              </h3>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;