import {initTRPC} from '@trpc/server'
import superjson from "superjson"

import {ZodError} from "zod"

import { db } from '../db'