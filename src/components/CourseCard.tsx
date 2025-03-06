
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function CourseCard({
  id,
  title,
  description,
  image,
  category,
  featured = false,
  className,
  style,
}: CourseCardProps) {
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl transition-all duration-300",
        "bg-white border border-border shadow-sm hover:shadow-md",
        "hover:translate-y-[-4px] hover:border-orbi-light",
        featured ? "lg:col-span-2" : "",
        className
      )}
      style={style}
    >
      <div className="overflow-hidden relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 image-shine"
        />
        <Badge 
          className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-orbi-blue text-white"
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
      
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight mb-1 group-hover:text-orbi-gold transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm text-balance line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="pt-2 mt-auto">
          <Link to={`/courses/${id}`} className="inline-flex items-center text-sm font-medium text-orbi-blue group-hover:text-orbi-gold">
            View Course
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
