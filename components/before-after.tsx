'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-border"
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <Image
        src="/projects/after-room.png"
        alt="Room after professional painting"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <Image
          src="/projects/before-room.png"
          alt="Room before painting"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ maxWidth: 'none' }}
        />
        <span className="absolute left-3 top-3 rounded-md bg-primary/80 px-2.5 py-1 text-xs font-medium text-primary-foreground">
          Before
        </span>
      </div>
      <span className="absolute right-3 top-3 rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
        After
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 cursor-ew-resize bg-background"
        style={{ left: `${pos}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-lg">
          <MoveHorizontal className="h-5 w-5" />
        </span>
      </div>
    </div>
  )
}
