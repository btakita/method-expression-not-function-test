import { writable, Writable } from 'svelte/store'
import { _b, B } from '@ctx-core/object'
export const my_str:my_str_T = _b('my_str', ()=>{
  return writable('')
})
export type my_str_T = B<Writable<string>>
