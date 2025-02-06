"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="bg-blue-950 text-white min-h-screen p-4 flex flex-col">
      {/* Header with employee info and time */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold">RUZİYE BARIT</h1>
              <div className="text-orange-400">ÜST GİYİM</div>
              <div className="text-sm">OPERATÖR</div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold">18:43</div>
      </div>

      {/* Product Information */}
      <div className="flex gap-4 mb-8">
        <Image src="/placeholder.svg" alt="Product Image" width={100} height={120} className="bg-white rounded-lg" />
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          <div>Model No: 3801</div>
          <div className="text-right">Kol İç Dikiş</div>
          <div>Order No: 34079</div>
          <div className="text-right">IS1250106026</div>
          <div>392 - Yan+Omuz Birleş</div>
        </div>
      </div>

      {/* Efficiency Circle */}
      <div className="flex-1 flex flex-col items-center justify-center mb-8">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm mb-2">Verim%</div>
              <div className="text-6xl font-bold">81</div>
            </div>
          </div>
          <svg className="w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="none" className="text-blue-900" />
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="none" strokeDasharray={553} strokeDashoffset={105} className="text-orange-500" />
          </svg>
          <div className="absolute bottom-0 left-0 bg-gray-700/50 rounded-full px-3 py-1">
            <div className="text-sm">5/7</div>
          </div>
        </div>

        {/* Target and Status */}
        <div className="text-center mt-4 space-y-2">
          <div className="text-2xl font-semibold">Hedef: 154</div>
          <div className="text-2xl font-semibold text-red-500">Durum: -3</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Statistics */}
        <div className="grid grid-cols-4 gap-4 mb-6 text-center">
          <div>
            <div className="text-sm">ÜRETİLEN</div>
            <div className="text-2xl font-bold">151</div>
          </div>
          <div>
            <div className="text-sm">SON İŞLEM</div>
            <div className="text-2xl font-bold">2.8</div>
          </div>
          <div>
            <div className="text-sm">GENEL PERFORMANS(%)</div>
            <div className="text-2xl font-bold">77</div>
          </div>
          <div>
            <div className="text-sm">GENEL VERİM(%)</div>
            <div className="text-2xl font-bold">77</div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <Button variant="secondary" className="w-full py-6 text-lg font-semibold">
            BANT
          </Button>
          <Button variant="secondary" className="w-full py-6 text-lg font-semibold">
            MODEL
          </Button>
          <Button variant="secondary" className="w-full py-6 text-lg font-semibold">
            OPERASYON
          </Button>
        </div>
      </div>
    </div>
  );
}
