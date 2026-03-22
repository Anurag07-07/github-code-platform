'use client'
import { trpc } from "@/lib/trpc/client";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";


export function HealthCheck(){
  const {data,isLoading,error} = trpc.health.useQuery();

  if (isLoading) {
    return <Skeleton className=" h-6 w-24"></Skeleton>
  }

  if (error) {
    return <Badge variant={'destructive'} >API Error</Badge>
  }

  return <Badge variant={'secondary'}>
    API:{data?.status} {data?.timestamps}
  </Badge>
}