import { useToast } from "./ui/use-toast"

export const Alert =(title, message)=>{

    const { toast } = useToast()

  toast({
    title: title,
    description: message,
    
  })
  return;
}