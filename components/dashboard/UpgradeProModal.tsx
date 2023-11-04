"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SubcriptionButton from "../SubcriptionButton";
import { useProStore } from "@/stores/pro-store";

interface UpgradeProModalProps {
  isProPlan?: boolean;
}

const UpgradeProModal: React.FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseModal } = useProStore();

  return (
    <Dialog open={isOpen}>
      <DialogContent onClose={handleCloseModal} showOverlay>
        <SubcriptionButton />
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeProModal;
