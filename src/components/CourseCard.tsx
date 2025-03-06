
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

export interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  lessons: number;
  instructor: string;
  featured?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function CourseCard({
  title,
  description,
  image,
  category,
  level,
  duration,
  students,
  lessons,
  instructor,
  featured = false,
  className,
  style,
}: CourseCardProps) {
  // Generate level color based on difficulty
  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  }[level];
  
  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-xl transition-all duration-300",
        "bg-white border border-border shadow-sm hover:shadow-md",
        "hover:translate-y-[-4px] hover:border-orbi-200",
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
          className="absolute top-3 left-3 z-20 px-2.5 py-1"
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
      
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={cn("font-medium", levelColor)}>
            {level}
          </Badge>
          <span className="text-sm text-muted-foreground">By {instructor}</span>
        </div>
        
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight mb-1 group-hover:text-orbi-700 transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm text-balance line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{lessons} lessons</span>
          </div>
        </div>
        
        <div className="pt-2 mt-auto">
          <button className="inline-flex items-center text-sm font-medium text-orbi-700 group-hover:text-orbi-800">
            View Course
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
