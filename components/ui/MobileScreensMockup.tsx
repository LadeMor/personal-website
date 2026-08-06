import { Iphone } from "@/components/ui/magicui/iphone";

type MobileScreensMockupProps = {
    screens: string[];
    alt: string;
    className?: string;
};

export function MobileScreensMockup({ screens, alt, className = "" }: MobileScreensMockupProps) {
    return (
        <div className={`flex min-w-0 max-w-full items-center justify-center gap-3 overflow-hidden sm:gap-5 ${className}`} aria-label={alt} role="img">
            {screens.slice(0, 3).map((screen, index) => (
                <div key={screen} className={`aspect-[433/882] max-h-full shrink-0 ${index === 1 ? "h-full" : "h-[92%] sm:h-[95%]"}`}>
                    <Iphone src={screen} className="h-full w-full" />
                </div>
            ))}
        </div>
    );
}
