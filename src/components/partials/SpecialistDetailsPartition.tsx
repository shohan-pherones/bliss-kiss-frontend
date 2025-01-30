import { services } from "@/constants";
import { Specialist } from "@/interfaces";
import {
  calculateAge,
  capitalizeText,
  determineHotnessType,
  determineNudityType,
  formatBodyMeasurements,
  formatHeight,
  kgToLb,
} from "@/lib/utils";
import { ArrowRight, Check, Dot } from "lucide-react";
import ServiceCard from "../blocks/ServiceCard";

interface SpecialistDetailsPartitionProps {
  specialist: Specialist;
}

const SpecialistDetailsPartition = ({
  specialist,
}: SpecialistDetailsPartitionProps) => {
  const specialistServices = services.filter((service) =>
    service.specialists.some((s) => s.id === specialist.id)
  );

  return (
    <div className="flex flex-col gap-2.5 lg:gap-5">
      <div>
        <span className="badge badge-secondary">{specialist.designation}</span>
        <h2 className="text-xl md:text-2xl font-bold">{specialist.name}</h2>
        <p className="text-sm opacity-50">{specialist.bio}</p>
      </div>
      <div>
        <h3 className="text md:text-lg font-bold">Basic Info</h3>
        <ul>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Sex:</b> {capitalizeText(specialist.sex)}
          </li>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Age:</b> {calculateAge(specialist.dateOfBirth)}
          </li>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Height:</b> {formatHeight(specialist.bodyMeasurements.height)} (
            {specialist.bodyMeasurements.height}cm)
          </li>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Weight:</b> {specialist.bodyMeasurements.weight} kg (
            {kgToLb(specialist.bodyMeasurements.weight)} lb)
          </li>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Body Measurements:</b>{" "}
            {formatBodyMeasurements(
              specialist.bodyMeasurements.chest,
              specialist.bodyMeasurements.waist,
              specialist.bodyMeasurements.hips
            )}
          </li>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Hotness:</b> {specialist.hotness} (
            {determineHotnessType(specialist.hotness)})
          </li>
          <li className="flex items-center gap-2">
            <Dot size={16} />
            <b>Nudity:</b> {capitalizeText(specialist.nudityLevel)} (
            {determineNudityType(specialist.nudityLevel)})
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text md:text-lg font-bold">Secret Offerings</h3>
        <ul>
          {specialist.secretOfferings.map((offering, index) => (
            <li key={index + offering} className="flex items-center gap-2">
              <Check size={16} className="text-accent" />
              {offering}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text md:text-lg font-bold">Procedures</h3>
        <ul>
          {specialist.tips.map((tip, index) => (
            <li key={index + tip} className="flex items-center gap-2">
              <ArrowRight size={16} />
              {tip}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text md:text-lg font-bold">
          Services ({specialistServices.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {specialistServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialistDetailsPartition;
