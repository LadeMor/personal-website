import { Iphone } from "@/components/ui/magicui/iphone";

type MobileScreensMockupProps = {
    screens: string[];
    alt: string;
    className?: string;
};

export function MobileScreensMockup({ screens, alt, className = "" }: MobileScreensMockupProps) {
    return (
        <div
            className={`min-w-0 max-w-full [container-type:inline-size] [--mockup-gap:1.5rem] [--mockup-width-factor:1.394] sm:[--mockup-gap:2.5rem] sm:[--mockup-width-factor:1.425] ${className}`}
            aria-label={alt}
            role="img"
        >
            <div className="flex h-[clamp(0px,calc((100cqw-var(--mockup-gap))/var(--mockup-width-factor)),100%)] w-full min-w-0 items-center justify-center gap-3 sm:gap-5">
                {screens.slice(0, 3).map((screen, index) => (
                    <div key={screen} className={`aspect-[433/882] max-h-full shrink-0 ${index === 1 ? "h-full" : "h-[92%] sm:h-[95%]"}`}>
                        <Iphone src={screen} className="h-full w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}
