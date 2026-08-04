import { Safari } from "@/components/ui/magicui/safari";

type DesktopMockupProps = {
    src: string;
    alt: string;
    url?: string;
    className?: string;
};

export function DesktopMockup({ src, alt, url = "serhii.dev", className = "" }: DesktopMockupProps) {
    return (
        <div className={className} aria-label={alt} role="img">
            <Safari imageSrc={src} url={url} className="w-full" />
        </div>
    );
}
