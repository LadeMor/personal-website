import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="flex justify-center items-start">
            <div className="max-width-[580px]">
                <div className="flex justify-between items-center mb-37.5">
                    <p className="font-label text-muted text-[12px] tracking-wide">[01] FRONTEND ENGINEER</p>
                    <p className="font-label text-muted text-[12px] tracking-wide">48.3794°N 31.1656°E<br />2019 — AVAILABLE</p>
                </div>
                <div>
                    <h1 className="font-heading text-heading text-[200px]/[171px] tracking-tight mb-3">SERHII<br />PIATKO</h1>
                    <div className="flex items-baseline gap-4 mb-10">
                        <p className="font-label text-muted text-[12px] tracking-wide">BUILDING DIGITAL</p>
                        <p className="font-body text-body text-[19px] ">Frontend-focused full-stack developer working across web, mobile,<br />
                            product interfaces and interactive experiences.</p>
                    </div>
                    <div className="flex items-end gap-4">
                        <div>
                            <div className="flex items-center gap-2.5 mb-8">
                                <Link className="bg-surface-dark px-6 py-3.5 inline-flex" href="/">
                                    <span className="flex justify-center items-center gap-2.5">
                                        <p className="font-label text-on-dark text-[12px] tracking-wide">SELECTED WORK</p>
                                        <Image
                                            src="/icons/arrow_down.svg"
                                            width={7}
                                            height={15}
                                            alt="Arrow down" />
                                    </span>
                                </Link>
                                <Link className="px-6 py-3.5 inline-flex border-b border-body" href="/">
                                    <span className="flex justify-center items-center gap-2.5">
                                        <p className="font-label text-body text-[12px] tracking-wide">SELECTED WORK</p>
                                        <Image
                                            src="/icons/arrow_right.svg"
                                            width={7}
                                            height={15}
                                            alt="Arrow right" />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="bg-accent w-1.5 h-1.5 rounded-full"></div>
                                <p className="font-label text-muted tracking-wide text-[12px]">KYIV → UKRAINE</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="h-12.5 w-px bg-muted"></div>
                            <p className="font-label text-muted tracking-wide text-[12px]">SCROLL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

