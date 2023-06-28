import { TypedUsedSelectorHook, useSelector } from "react-redux";
import { RootState } from "../app/store";

export const useAppSelector: TypedUsedSelectorHook<RootState> = useSelector;
