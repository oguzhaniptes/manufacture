"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="bg-blue-950 text-white min-h-screen p-3 sm:p-4 flex flex-col">
      {/* Header with employee info and time */}
      <div className="flex justify-between items-start mb-4 sm:mb-6">
        <div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">RUZİYE BARIT</h1>
              <div className="text-orange-400 text-sm sm:text-base">ÜST GİYİM</div>
              <div className="text-xs sm:text-sm">OPERATÖR</div>
            </div>
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-bold">18:43</div>
      </div>

      {/* Product Information */}
      <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Image src="/placeholder.svg" alt="Product Image" width={100} height={120} className="bg-white rounded-lg shrink-0" />
        <div className="flex flex-col gap-y-1 text-sm sm:text-base">
          <div>Model No: 3801</div>
          <div>Order No: 34079</div>
          <div>392 - Yan+Omuz Birleş</div>
          <div>Kol İç Dikiş</div>
          <div>IS1250106026</div>
        </div>
      </div>

      {/* Efficiency Circle */}
      <div className="flex-1 flex flex-col items-center justify-center mb-6 sm:mb-8">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm sm:text-base mb-1 sm:mb-2">Verim%</div>
              <div className="text-5xl sm:text-7xl font-bold">81</div>
            </div>
          </div>
          <svg className="w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="none" className="text-blue-900 sm:hidden" />
            <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="none" strokeDasharray={553} strokeDashoffset={105} className="text-orange-500 sm:hidden" />
            {/* Larger circles for desktop */}
            <circle cx="128" cy="128" r="116" stroke="currentColor" strokeWidth="16" fill="none" className="text-blue-900 hidden sm:block" />
            <circle
              cx="128"
              cy="128"
              r="116"
              stroke="currentColor"
              strokeWidth="16"
              fill="none"
              strokeDasharray={729}
              strokeDashoffset={138}
              className="text-orange-500 hidden sm:block"
            />
          </svg>
          <div className="absolute bottom-0 left-0 bg-gray-700/50 rounded-full px-3 sm:px-4 py-1 sm:py-2">
            <div className="text-sm sm:text-base">5/7</div>
          </div>
        </div>

        {/* Target and Status */}
        <div className="text-center mt-3 sm:mt-4 space-y-1 sm:space-y-2">
          <div className="text-xl sm:text-2xl font-semibold">Hedef: 154</div>
          <div className="text-xl sm:text-2xl font-semibold text-red-500">Durum: -3</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        {/* Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6 text-center">
          <div>
            <div className="text-xs sm:text-sm">ÜRETİLEN</div>
            <div className="text-xl sm:text-2xl font-bold">151</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm">SON İŞLEM</div>
            <div className="text-xl sm:text-2xl font-bold">2.8</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm">GENEL PERFORMANS(%)</div>
            <div className="text-xl sm:text-2xl font-bold">77</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm">GENEL VERİM(%)</div>
            <div className="text-xl sm:text-2xl font-bold">77</div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <Button variant="secondary" className="w-full py-4 sm:py-6 text-base sm:text-lg font-semibold">
            BANT
          </Button>
          <Button variant="secondary" className="w-full py-4 sm:py-6 text-base sm:text-lg font-semibold">
            MODEL
          </Button>
          <Button variant="secondary" className="w-full py-4 sm:py-6 text-base sm:text-lg font-semibold">
            OPERASYON
          </Button>
        </div>
      </div>
    </div>
  );
}
