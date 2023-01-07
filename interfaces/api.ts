export interface SuccessResponse<T = any> {
  status: number
  message: string
  success: boolean
  data: T
}

export type ResponseI = [SuccessResponse | undefined, string | undefined]
