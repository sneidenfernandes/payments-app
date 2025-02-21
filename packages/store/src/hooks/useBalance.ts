import { balanceAtom } from "../store/store.js";
import { PrimitiveAtom } from "jotai";

export const useBalance = ():PrimitiveAtom<number> => {
    return balanceAtom;
}