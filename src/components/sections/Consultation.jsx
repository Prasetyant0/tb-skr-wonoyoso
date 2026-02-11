import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FAQ_CONTENT } from '../../constants';
import { Reveal } from '../ui/Reveal';

const Consultation = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [formData, setFormData] = useState({
        nama: '',
        whatsapp: '',
        kategori: 'Umum',
        pesan: ''
    });

    const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'whatsapp') {
            const numericValue = value.replace(/[^0-9]/g, '');
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("https://formspree.io/f/mpqjqyya", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ nama: '', whatsapp: '', kategori: 'Umum', pesan: '' });

                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="consultation" className="py-20 bg-metal-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl -z-0"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* --- KOLOM KIRI: FORMULIR KONSULTASI --- */}
                    <div className="w-full lg:w-5/12">
                        <Reveal>
                            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-accent-orange relative">
                                <h3 className="text-3xl font-bold text-metal-500 mb-2 font-display">
                                    Konsultasi Gratis
                                </h3>
                                <p className="text-gray-600 mb-8 text-sm">
                                    Butuh bantuan memilih material? Isi formulir di bawah, tim kami akan segera menghubungi Anda via WhatsApp.
                                </p>

                                {/* FEEDBACK MESSAGE (Sukses/Gagal) */}
                                <AnimatePresence>
                                    {status === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 text-green-800"
                                        >
                                            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                            <div className="text-sm">
                                                <strong>Pesan Terkirim!</strong><br/>
                                                Terima kasih telah menghubungi kami. Tim TB. SKR akan segera membalas via WhatsApp.
                                            </div>
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-800"
                                        >
                                            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                            <div className="text-sm">
                                                <strong>Gagal Mengirim.</strong><br/>
                                                Mohon periksa koneksi internet Anda dan coba lagi.
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-metal-500 mb-1">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            required
                                            placeholder="Masukkan nama Anda"
                                            className="w-full p-3 bg-metal-100 border border-metal-200 rounded focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                                            autoComplete='off'
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-metal-500 mb-1">Nomor WhatsApp</label>
                                        <input
                                            type="tel"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            required
                                            placeholder="08xx xxxx xxxx"
                                            className="w-full p-3 bg-metal-100 border border-metal-200 rounded focus:outline-none focus:border-accent-orange transition-all"
                                            autoComplete='off'
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-metal-500 mb-1">Kategori Kebutuhan</label>
                                        <select
                                            name="kategori"
                                            value={formData.kategori}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-metal-100 border border-metal-200 rounded focus:outline-none focus:border-accent-orange transition-all text-gray-600"
                                        >
                                            <option value="Umum">Pilih Kategori...</option>
                                            <option value="Renovasi">Renovasi Rumah</option>
                                            <option value="Bangun Baru">Bangun Baru</option>
                                            <option value="Proyek Besar">Proyek Besar</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-metal-500 mb-1">Pesan Anda</label>
                                        <textarea
                                            name="pesan"
                                            value={formData.pesan}
                                            onChange={handleChange}
                                            rows="4"
                                            required
                                            placeholder="Ceritakan kebutuhan proyek Anda..."
                                            className="w-full p-3 bg-metal-100 border border-metal-200 rounded focus:outline-none focus:border-accent-orange transition-all"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
                                        whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className={`w-full font-bold py-3 rounded flex justify-center items-center gap-2 transition-all shadow-lg ${
                                            status === 'submitting'
                                            ? 'bg-metal-300 text-metal-500 cursor-not-allowed'
                                            : 'bg-accent-orange text-white hover:bg-accent-hover shadow-orange-500/20'
                                        }`}
                                    >
                                        {status === 'submitting' ? 'Sedang Mengirim...' : (
                                            <>Kirim Pesan <Send size={18} /></>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </Reveal>
                    </div>

                    {/* --- KOLOM KANAN: FAQ (ACCORDION) - TIDAK ADA PERUBAHAN --- */}
                    <div className="w-full lg:w-7/12">
                        <Reveal delay={0.2}>
                            <h2 className="text-4xl font-bold text-metal-500 mb-8 font-display">
                                Pertanyaan <span className="text-accent-orange">Umum</span>
                            </h2>
                        </Reveal>

                        <div className="space-y-4">
                            {FAQ_CONTENT.map((item, index) => (
                                <Reveal key={index} delay={index * 0.1} width="100%">
                                    <div className="border border-metal-200 rounded-lg bg-white overflow-hidden transition-all duration-300 hover:border-metal-400">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                                        >
                                            <span className={`font-bold text-lg font-display transition-colors ${activeAccordion === index ? 'text-accent-orange' : 'text-metal-500'
                                                }`}>
                                                {item.question}
                                            </span>
                                            <div className={`p-1 rounded-full transition-colors ${activeAccordion === index ? 'bg-accent-orange text-white' : 'bg-metal-100 text-metal-500'
                                                }`}>
                                                {activeAccordion === index ? <Minus size={20} /> : <Plus size={20} />}
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {activeAccordion === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="p-5 pt-0 text-gray-600 border-t border-dashed border-metal-200 mt-2">
                                                        {item.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Consultation;
