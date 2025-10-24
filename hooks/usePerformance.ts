import { useMemo } from "react";

import { PartWithPriceProps } from "@/type/type";
import { parsePrice } from "@/components/atoms/Price";

export const usePerformance = (parts: PartWithPriceProps[]) => {
  const totalPrice = useMemo(
    () => parts.reduce((sum, part) => sum + parsePrice(part.price), 0),
    [parts],
  );

  const averageScore = useMemo(() => {
    if (parts.length === 0) return 0;
    const total = parts.reduce((sum, p) => sum + (p.benchmarkScore || 0), 0);
    return Math.round(total / parts.length);
  }, [parts]);

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return "purple.500";
    if (score >= 80) return "green.500";
    if (score >= 70) return "yellow.500";
    if (score >= 60) return "orange.500";
    return "red.500";
  };

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return "S";
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    return "D";
  };

  return {
    totalPrice,
    averageScore,
    getPerformanceColor,
    getPerformanceGrade,
  };
};
