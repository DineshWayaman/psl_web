"use client";
import { useEffect, useState, useRef } from 'react';

export default function Counter() {
  const startYear = 1998;
  const currentYear = new Date().getFullYear();
  const totalYears = currentYear - startYear;
  
  const [count, setCount] = useState(0);
  const [year, setYear] = useState(startYear);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentCount = 0;
    let currentYearCount = startYear;
    const interval = setInterval(() => {
      if (currentCount < totalYears) {
        setCount(prev => prev + 1);
        setYear(prev => prev + 1);
        currentCount++;
        currentYearCount++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isVisible, totalYears]);

  return (
    <div ref={counterRef} className="flex flex-col items-center">
      <div className="text-7xl md:text-8xl font-bold text-[#003366] dark:text-white flex items-center gap-2">
        <span>{count}</span>
        <span className="text-[#0066cc]">+</span>
      </div>
      {/* <div className="text-lg md:text-xl text-[#003366] dark:text-gray-200 font-semibold tracking-wide mt-4">
        YEARS OF EXCELLENCE
      </div> */}
      {/* <div className="text-gray-600 dark:text-gray-400 mt-2">
        Since {startYear}
      </div> */}
    </div>
  );
}
