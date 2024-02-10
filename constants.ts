import { Code, ImageIcon, MessageSquare, Music2Icon, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 10;
export const tools = [{
    label : "Conversation",
    icon : MessageSquare,
    color : "text-violet-500",
    bgColor : "bg-violet-500/10",
    href : "/conversation"
  },
  {label : "Music Generation",
  icon : Music2Icon,
  color : "text-green-500",
  bgColor : "bg-green-500/10",
  href : "/music"
  
  },
  {
    label : "Image Generation",
    icon : ImageIcon,
    color : "text-pink-700",
    bgColor : "bg-pink-500/10",
    href : "/image"
  },
  {
    label : "Video Generation",
    icon : VideoIcon,
    color : "text-orange-500",
    bgColor : "bg-orange-500/10",
    href : "/video"
  },{
    label : "Code Generation",
    icon : Code,
    color : "text-green-500",
    bgColor : "bg-green-500/10",
    href : "/code"
  }]
  