"use client"

import { useAtom } from "jotai"
import {balanceAtom} from "@repo/store/atoms";


export function ShowBalance(){

    const [balance, setBalance] = useAtom(balanceAtom);
    
    return <div>
            {balance}
           </div>
}