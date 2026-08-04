import Image from "next/image";
import type { Work } from "@/data/works";

type CaseStudyInterfacesProps = {
    work: Work;
};

export function CaseStudyInterfaces({ work }: CaseStudyInterfacesProps) {
    const [featuredInterface, ...secondaryInterfaces] = work.interfaceCaptions;

    return (
        <section className="bg-surface-dark border-t border-t-muted">
            <div className="container px-10 py-20">
                <div className="flex items-baseline gap-4 mb-12">
                    <div className="flex items-center gap-5">
                        <p className="font-label text-on-dark-subheading text-[12px] tracking-wide">03</p>
                        <div className="w-5 h-px bg-on-dark-subheading"></div>
                    </div>
                    <h2 className="font-heading text-on-dark-heading text-[48px]/[52px] tracking-tight font-extrabold">SELECTED INTERFACES</h2>
                </div>

                <div className="mb-7">
                    <Image
                        className="w-full h-auto border border-[rgba(242,239,231,0.16)]"
                        src={work.image}
                        width={1120}
                        height={520}
                        alt={`${work.title} ${featuredInterface.title}`} />
                    <div className="flex items-start justify-between mt-4">
                        <p className="font-label text-on-dark-subheading text-[11px] tracking-wide uppercase">{featuredInterface.title}</p>
                        <p className="font-body text-on-dark-subheading text-[13px]/[20px] italic max-w-[360px] text-right">{featuredInterface.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {secondaryInterfaces.map((item) => (
                        <div key={item.title}>
                            <Image
                                className="w-full h-[265px] object-cover border border-[rgba(242,239,231,0.12)] mb-4"
                                src={work.image}
                                width={360}
                                height={265}
                                alt={`${work.title} ${item.title}`} />
                            <p className="font-label text-on-dark-subheading text-[11px] tracking-wide uppercase mb-2">{item.title}</p>
                            <p className="font-body text-on-dark-subheading text-[13px]/[20px] italic">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
