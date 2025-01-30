import { SpecialistCard } from "@/components/blocks/specialists";
import { Service } from "@/interfaces";
import { ArrowRight, Check } from "lucide-react";

interface ServiceDetailsPartitionProps {
  service: Service;
}

const ServiceDetailsPartition = ({ service }: ServiceDetailsPartitionProps) => {
  return (
    <div className="flex flex-col gap-2.5 lg:gap-5">
      <div>
        <h2 className="text-xl md:text-2xl font-bold">{service.title}</h2>
        <p className="text-sm opacity-50">{service.shortDescription}</p>
      </div>
      <div>
        <h3 className="text md:text-lg font-bold">Perks</h3>
        <ul>
          {service.perks.map((perk, index) => (
            <li key={index + perk} className="flex items-center gap-2">
              <Check size={16} className="text-accent" />
              {perk}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text md:text-lg font-bold">Procedures</h3>
        <ul>
          {service.procedures.map((procedure, index) => (
            <li key={index + procedure} className="flex items-center gap-2">
              <ArrowRight size={16} />
              {procedure}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text md:text-lg font-bold">
          Specialists ({service.specialists.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {service.specialists.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPartition;
