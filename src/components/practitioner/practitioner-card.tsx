"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin, Building2, FileCheck, Phone } from "lucide-react";
import type { Practitioner } from "@/types";
import { REGIONS } from "@/types";

interface PractitionerCardProps {
  practitioner: Practitioner;
  onClick?: () => void;
  className?: string;
}

export function PractitionerCard({
  practitioner,
  onClick,
  className,
}: PractitionerCardProps) {
  const displayRegions = !practitioner.regions ||
    practitioner.regions.length === 0 ||
    practitioner.regions.length === REGIONS.length
    ? "All Regions"
    : practitioner.regions.length === 1
    ? practitioner.regions[0]
    : `${practitioner.regions.length} regions`;

  return (
    <Card
      hover
      onClick={onClick}
      className={cn("group", className)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-[18px] font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors">
            {practitioner.fullName}
          </h3>
          {practitioner.companyName && (
            <div className="flex items-center gap-1.5 mt-1 text-sm text-[var(--color-text-secondary)]">
              <Building2 className="w-3.5 h-3.5" />
              <span>{practitioner.companyName}</span>
            </div>
          )}
        </div>
        <Badge variant="active">
          <FileCheck className="w-3 h-3" />
          SAIT Member
        </Badge>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        {/* Region */}
        <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{displayRegions}</span>
        </div>

        {/* Phone - only show if exists */}
        {practitioner.phone && (
          <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{practitioner.phone}</span>
          </div>
        )}

        {/* Specialisation */}
        {practitioner.specialisation.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {practitioner.specialisation.slice(0, 3).map((spec) => (
              <Badge key={spec} variant="outline">
                {spec}
              </Badge>
            ))}
            {practitioner.specialisation.length > 3 && (
              <Badge variant="neutral">
                +{practitioner.specialisation.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* PR Number */}
        <div className="pt-2 mt-3 border-t border-[var(--color-light-gray)]">
          <span className="text-xs text-[var(--color-text-secondary)] font-mono">
            {practitioner.prNumber}
          </span>
        </div>
      </div>
    </Card>
  );
}
