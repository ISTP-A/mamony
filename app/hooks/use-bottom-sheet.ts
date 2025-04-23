import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export function useBottomSheet() {
    const ref = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    function open() {
        ref.current?.expand();
    }
    function close() {
        ref.current?.close();
    }

    const control = {
        open,
        close,
        handleSheetChanges,
    }

    return [ref, control] as const;
}