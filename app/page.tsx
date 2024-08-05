"use client";
import Navbar from "@/components/Navbar";
import Live from "../components/Live";
import RightSidebar from "@/components/RightSidebar";
import LeftSidebar from "@/components/LeftSidebar";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { initializeFabric } from "@/lib/canvas";
export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });
  }, []);
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <section className="flex h-full flex-row">
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  );
}
