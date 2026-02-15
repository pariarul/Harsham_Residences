"use client";

import Section from "@/components/ui/Section";

export default function TermsOfService() {
    return (
        <Section className="py-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-playfair font-bold text-slate-900 mb-8">Terms of Service</h1>
                <p className="text-slate-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website at Harsham Residences, you agree to be bound by these terms of service,
                            all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                            If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">2. Use License</h2>
                        <p className="mb-4">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Harsham Residences'
                            website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
                            and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>Attempt to decompile or reverse engineer any software contained on Harsham Residences' website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials; or</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on Harsham Residences' website are provided on an 'as is' basis. Harsham Residences makes no warranties,
                            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties
                            or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">4. Limitations</h2>
                        <p>
                            In no event shall Harsham Residences or its suppliers be liable for any damages (including, without limitation, damages for
                            loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on
                            Harsham Residences' website, even if Harsham Residences or a Harsham Residences authorized representative has been notified
                            orally or in writing of the possibility of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">5. Accuracy of Materials</h2>
                        <p>
                            The materials appearing on Harsham Residences' website could include technical, typographical, or photographic errors.
                            Harsham Residences does not warrant that any of the materials on its website are accurate, complete or current.
                            Harsham Residences may make changes to the materials contained on its website at any time without notice.
                            However Harsham Residences does not make any commitment to update the materials.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-emerald-800 mb-4">6. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit
                            to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>
                </div>
            </div>
        </Section>
    );
}
