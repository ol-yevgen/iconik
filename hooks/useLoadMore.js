'use client'
import { useState, useMemo } from "react"
export const useLoadMore = (list, limit) => {
    const [offset, setOffset] = useState(limit);

    const memoSlicedPictureData = useMemo(() => list.slice(0, offset), [offset, list])

    return { memoSlicedPictureData, offset, setOffset}
}