import { Iphone } from "@/components/ui/magicui/iphone";

type MobileScreensMockupProps = {
    screens: string[];
    alt: string;
    className?: string;
};

export function MobileScreensMockup({ screens, alt, className = "" }: MobileScreensMockupProps) {
    return (
        <div className={`flex items-center justify-center gap-5 overflow-hidden ${className}`} aria-label={alt} role="img">
            {screens.slice(0, 3).map((screen, index) => (
                <div key={screen} className={`shrink-0 aspect-[433/882] ${index === 1 ? "h-[92%]" : "h-[84%]"}`}>
                    <Iphone src={screen} className="h-full w-full" />
                </div>
            ))}
        </div>
    );
}
