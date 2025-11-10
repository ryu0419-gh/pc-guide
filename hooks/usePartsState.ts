import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { PartWithPriceProps, SpecLevel } from "@/type/type";

export const usePartsState = (
  initialRank?: "budget" | "recommended" | "highend",
) => {
  const [globalRank, setGlobalRank] = useState<SpecLevel>(
    initialRank || "recommended",
  );
  const [partRanks, setPartRanks] = useState<Record<string, SpecLevel>>({});

  const [selectedPart, setSelectedPart] = useState<PartWithPriceProps | null>(
    null,
  );
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onClose: closeModal,
  } = useDisclosure();

  const handleGlobalRankChange = (value: SpecLevel) => {
    setGlobalRank(value);
    setPartRanks({});
  };

  const handlePartRankChange = (type: string, newRank: SpecLevel) => {
    setPartRanks((prev) => ({ ...prev, [type]: newRank }));
  };

  const handleShowDetail = (part: PartWithPriceProps) => {
    setSelectedPart(part);
    openModal();
  };

  return {
    globalRank,
    partRanks,
    selectedPart,
    isModalOpen,

    handleGlobalRankChange,
    handlePartRankChange,
    handleShowDetail,
    closeModal,
  };
};
