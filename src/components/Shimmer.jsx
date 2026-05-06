

// Generic shimmer for text / boxes
export function ShimmerCard({ className }) {
    return (
        <div className={`bg-gray-300 rounded-lg overflow-hidden animate-pulse ${className}`}></div>
    );
}

// Shimmer specifically for brand cards
export function ShimmerBrandCard() {
    return (
        <div className="flex items-center justify-center w-40 h-24 bg-gray-300 rounded-lg animate-pulse"></div>
    );
}