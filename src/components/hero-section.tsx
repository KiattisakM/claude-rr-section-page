import { Input } from '@/components/ui/input'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { cn } from '@/lib/utils'
import { Send } from 'lucide-react'

export function HeroSection() {
  return (
    <section className={cn("w-full py-24 px-4 bg-app-background")}>
      <div className={cn("max-w-5xl mx-auto text-center")}>
        <h1 className={cn(
          "text-5xl md:text-7xl font-bold mb-8 leading-tight text-app-primary"
        )}>
          Life Planning, Making
          <br />
          Easy to Turn Dreams a Reality.
        </h1>
        
        <p className={cn(
          "text-xl mb-16 max-w-2xl mx-auto font-medium text-app-secondary"
        )}>
          Get Exclusive offers on purchase of any plans
        </p>
        
        <div className={cn(
          "flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto"
        )}>
          <div className={cn("relative flex-1")}>
            <Send className={cn("absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-app-muted")} />
            <Input 
              type="email" 
              placeholder="Your Email"
              className={cn(
                "flex-1 h-14 text-base pl-12 pr-4 border-2 border-app-border bg-app-surface focus:ring-0 rounded-full"
              )}
            />
          </div>
          <ShimmerButton
            shimmerColor="var(--app-green)"
            shimmerSize="0.05em"
            shimmerDuration="3s"
            borderRadius="28px"
            background="var(--app-text-primary)"
            className={cn(
              "h-14 px-8 font-semibold text-base text-white",
              "border-transparent"
            )}
          >
            Sign Up
          </ShimmerButton>
        </div>
      </div>
    </section>
  )
}